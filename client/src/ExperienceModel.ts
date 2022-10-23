import exp from "constants";
import { Experience, User, Experience_Template, Post, PostFormatted } from "./types";
import { getUserFromEmailAPI, createExperienceAPI, listenToExperienceAPI } from "./webAPI/webAPI";
import { socket } from "./app";
import { UserModel } from "./app";

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
        this.img = ""
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
            console.log(res.data);
                return res.data[Object.keys(res.data)[0]];
            
        });
    }

    addParticipant(email: string){
        getUserFromEmailAPI(email, localStorage.getItem("refreshToken")).then((res) => {
            //Get the first property in the response object
            console.log(res.data);
                this.participants = [...this.participants, (res.data[Object.keys(res.data)[0]])];
                this.notifyObservers();
            
        });
    }

    createExperience(name, start_time, end_time, participants) {
        participants = [...participants, UserModel];

        return createExperienceAPI(localStorage.getItem("refreshToken"), name,start_time, end_time, [...participants.map(p => p.id)]).then((res) => {
            console.log("DENNA är creatad", res.data.exp_id);
            //UserModel.addExperience(res.data.exp_id);

            this.listenToExperienceData(res.data.exp_id);
            return res;
        });
    }

    listenToExperienceData(id:string) {
        console.log("Nu är listening experince anropad med id: ", id);
        listenToExperienceAPI(localStorage.getItem("refreshToken"), id);
        socket.on("experience", (data) => {
            console.log("Nu får vi denna data i vår socket: ", data.id, data.name)
            this.id = data.id;
            this.name = data.name;
            this.participants = data.participants;
            this.start_time = this.formatDate(data.start_time);
            this.end_time = this.formatDate(data.end_time);
            this.template = data.template;
            this.posts = data.posts;
            console.log("inne i listening posts", data.posts);
            this.creator = data.creator;
            console.log("inne i listening2");
            this.img = data.img;
            if (this.posts != undefined) {
                this.formatPosts(this.posts);
            }
            console.log("Innan nottify");
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
        this.notifyObservers();
        console.log("log från clear", this.name);
    }

    async calulateImgDimensions (url) {
        const promise: any= new Promise((resolve, reject) => {
            let img = new Image()
            img.onload = () => resolve([img.height, img.width]);
            img.onerror = reject
            img.src = url
          })
        return promise
    }

    formatPosts(posts: object) {
        this.posts_formatted = []; // TODO: don't reset Array, push next post to it but check if it's already in here
        for (let [key, value] of Object.entries(posts)) {
            this.calulateImgDimensions(value.imgURL).then((res: Array<number>) => {
                this.posts_formatted.push({
                src: value.imgURL, 
                height: res[0],
                width: res[1],
                caption: value.caption,
                name: value.uploaderName
            })

            })
            }
        }

    formatDate(date) {
        return date.replace('T', ' ').slice(0, 16);
    }
}
       
    


export default ExperienceModel;

