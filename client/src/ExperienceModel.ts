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
    posts: Array<any>;
    posts_formatted: PostFormatted[];
    subscribers:Array<any> =[];
    creator: string;

    constructor() {
        this.id = "";
        this.name = "";
        this.participants = [];
        this.start_time = "";
        this.end_time = "";
        this.template = Experience_Template.Timeline;
        this.posts = [];
        this.posts_formatted = [];
        this.creator = "";
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
            UserModel.addExperience(res.data.exp_id);
            this.listenToExperienceData(res.data.exp_id);
            return res;
        });
    }

    listenToExperienceData(id:string) {
        listenToExperienceAPI(id, localStorage.getItem("refreshToken"));
        socket.on("experience", (data) => {
            this.id = data.id;
            this.name = data.name;
            this.participants = data.participants;
            this.start_time = data.start_time;
            this.end_time = data.end_time;
            this.template = data.template;
            this.posts = data.posts;
            this.creator = data.creator;
            if (Object.keys(this.posts).length !== 0 ) {
                this.formatPosts(this.posts);
            }
            this.notifyObservers();
            console.log("posts: ", this.posts)
            });
    }

    formatPosts(posts: any[]) {
        console.log(posts)
        this.posts_formatted = []; // TODO: don't reset Array, push next post to it but check if it's already in here
        for (let [key, value] of Object.entries(posts)) {
            console.log(key, value)
            this.posts_formatted.push({
                src: value.imgURL, 
                width: 1000,
                height: 1000,
                caption: "After Rain (Jeshu John - designerspics.com)",})}
        }}  

export default ExperienceModel;