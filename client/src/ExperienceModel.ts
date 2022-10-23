import exp from "constants";
import { Experience, User, Experience_Template, Post, PostFormatted } from "./types";
import { getUserFromEmailAPI, createExperienceAPI, listenToExperienceAPI, getExpAPI, uploadAPI } from "./webAPI/webAPI";
import { socket } from "./app";
import { UserModel } from "./app";
import { differenceInDays, eachDayOfInterval } from "date-fns";
import { v4 as uuid } from 'uuid';

class ExperienceModel {
    id: string;
    name: string;
    participants: any[];
    start_time: string;
    end_time: string;
    template: Experience_Template;
    posts: object;
    posts_formatted: PostFormatted[];
    subscribers:Array<any> =[];
    creator: string;
    img: string;
    loadingPosts: boolean;

    constructor() {
        this.id = "";
        this.name = "";
        this.participants = [];
        this.start_time = "";
        this.end_time = "";
        this.template = Experience_Template.Timeline;
        this.posts = {};
        this.posts_formatted = [];
        this.creator = "";
        this.img = "";
        this.loadingPosts;
    }

    addObserver(obs){
        this.subscribers= this.subscribers.concat(obs);   
        return ()=> this.removeObserver(obs);                                                   
    }

    removeObserver(obs){
        this.subscribers= this.subscribers.filter(o=> o!== obs); 
    }

    notifyObservers(){
        this.subscribers.forEach(callback=> {
            try{callback()}catch(err){
                  console.error("Error ", err, callback);}
        })
    }

    fetchInvitedParticipant(email: string){
        return getUserFromEmailAPI(email, localStorage.getItem("refreshToken")).then((res) => {
            //Get the first property in the response object
                return res.data[Object.keys(res.data)[0]];
            
        });
    }

    addParticipant(email: string){
        getUserFromEmailAPI(email, localStorage.getItem("refreshToken")).then((res) => {
            //Get the first property in the response object
                this.participants = [...this.participants, (res.data[Object.keys(res.data)[0]])];
                this.notifyObservers();
            
        });
    }

    createExperience(name, start_time, end_time, participants) {
        participants = [...participants, UserModel];

        return createExperienceAPI(localStorage.getItem("refreshToken"), name,start_time, end_time, [...participants.map(p => p.id)]).then((res) => {
            //UserModel.addExperience(res.data.exp_id);

            this.listenToExperienceData(res.data.exp_id);
            return res;
        });
    }

    listenToExperienceData(id:string) {
        listenToExperienceAPI(localStorage.getItem("refreshToken"), id);
        socket.off("experience");
        socket.on("experience", (data) => {
            this.id = data.id;
            this.name = data.name;
            this.participants = data.participants;
            this.start_time = this.formatDate(data.start_time);
            this.end_time = this.formatDate(data.end_time);
            this.template = data.template;
            this.posts = data.posts;
            this.creator = data.creator;
            this.img = data.img;
            if (this.posts != undefined) {
                this.formatPosts(this.posts);
            }
            this.notifyObservers();
        });
    }

    clear() {
        this.id = "";
        this.name = "";
        this.participants = [];
        this.start_time = "";
        this.end_time = "";
        this.template = Experience_Template.Timeline;
        this.posts = {};
        this.posts_formatted = [];
        this.creator = "";
        this.img = "";
        // nödlösning window.location.reload();
        this.notifyObservers();
    }

    async calculateImgDimensions (url) {
        const promise: any= new Promise((resolve, reject) => {
            let img = new Image()
            img.onload = () => resolve([img.height, img.width]);
            img.onerror = reject
            img.src = url
          })
        return promise
    }

    uploadImage (file, text) {
        let formData = new FormData();

    //Konvertera token till JSON för att lägga in i formdata
    let token = localStorage.getItem("refreshToken")
    const tokenJSON = JSON.stringify(token);
    const tokenBlob = new Blob([tokenJSON], {
      type: 'application/json'
    });
    formData.append("token", tokenBlob);

    //Appenda experience id
    let expId = this.id
    const expIdJSON = JSON.stringify(expId);
    const expIdBlob = new Blob([expIdJSON], {
      type: 'application/json'
    });
    formData.append("expId", expIdBlob);
    
    //Appenda experience id
    let date= file.lastModifiedDate
    const dateJSON = JSON.stringify(date);
    const dateBlob = new Blob([dateJSON], {
      type: 'application/json'
    });
    formData.append("date", dateBlob);

    let caption = text
    const captionJSON = JSON.stringify(caption);
    const captionBlob = new Blob([captionJSON], {
      type: 'application/json'
    });
    formData.append("caption", captionBlob);

    let uploaderName:string = UserModel.first_name + " " + UserModel.last_name;
    const uploaderNameJSON = JSON.stringify(uploaderName);
    const uploaderNameBlob = new Blob([uploaderNameJSON], {
      type: 'application/json'
    });
    formData.append("uploaderName", uploaderNameBlob);
    
    let uploadId = uuid();
    //Skapar en blob så at vi kan byta namn till unikt id
    let blob = file.slice(0, file.size, "image/jpeg");
    let newFile = new File([blob], `${uploadId}`, { type: "image/jpeg" });
    // Build the form data - You can add other input values to this i.e descriptions, make sure img is appended last
    formData.append("imgfile", newFile);
  
    return uploadAPI(formData);
  }
/*
    async formatPosts(posts: object) {
        console.log(posts, " posts i formatPosts")
        this.posts_formatted = []; // TODO: don't reset Array, push next post to it but check if it's already in here
        let promises = [];
        for (let [key, value] of Object.entries(posts)) {
            console.log(value);
            this.calculateImgDimensions(value.imgURL).then((res: Array<number>) => {
                this.posts_formatted = [...this.posts_formatted, {
                    src: value.imgURL, 
                    height: res[0],
                    width: res[1],
                    caption: value.caption,
                    name: value.uploaderName
                }]
                this.notifyObservers();
                console.log("posts formatted: ", this.posts_formatted);
            })
         }
    }*/

    formatPosts(posts: object) {
        let promises: any[] = [];
        for (let [key, value] of Object.entries(posts)) {
            promises.push(this.calculateImgDimensions(value.imgURL).then((res) => {return res}));
        }

        Promise.all(promises).then((res) => {
            this.posts_formatted = [];
            let i = 0;
            for (let [key, value] of Object.entries(posts)) {
                this.posts_formatted.push({
                    src: value.imgURL, 
                    height: res[i][0],
                    width: res[i][1],
                    caption: value.caption,
                    name: value.uploaderName
                });
                i += 1;
            }
            this.notifyObservers();
        });
    }

    formatDate(date) {
        return date.replace('T', ' ').slice(0, 16);
    }

    formatDateDashboard(start_time: Date, end_time: Date) { 
        return JSON.stringify(start_time).replace('T', ' ').slice(1, 17) + " - " + JSON.stringify(end_time).replace('T', ' ').slice(1, 17);
        /*
        console.log("HEow",  eachDayOfInterval({start: start_time, end: end_time})) ;
        if(differenceInDays(end_time, start_time) > 0) {
            return JSON.stringify(start_time).slice(0, 10) + " - " + JSON.stringify(end_time).slice(0, 10);
        } else {
            return JSON.stringify(start_time).replace('T', ' ').slice(1, 17) + " - " + JSON.stringify(end_time).slice(12, 17);
        }*/
    }

    getExpSummary(experiences){
        const calls = experiences.map(exp => {

            return getExpAPI(localStorage.getItem("refreshToken"), exp, true).then((res) => {
                const ref = res.data.data;

                return {
                    id: ref.id,
                    name: ref.name,
                    creator: ref.creator,
                    time_span: this.formatDateDashboard(ref.start_time, ref.end_time),
                    participants: ref.participants,
                    template: ref.template,
                    img: ref.img

                };
            });
        });
        return Promise.all(calls).then((value) => {return value})
    }
}
       
    


export default ExperienceModel;

