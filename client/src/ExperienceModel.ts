import exp from "constants";
import { Experience, User, Experience_Template, Post } from "./types";
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
    posts: Post[];
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
        return getUserFromEmailAPI(email).then((res) => {
            //Get the first property in the response object
            console.log(res.data);
                return res.data[Object.keys(res.data)[0]];
            
        });
    }

    addParticipant(email: string){
        getUserFromEmailAPI(email).then((res) => {
            //Get the first property in the response object
            console.log(res.data);
                this.participants = [...this.participants, (res.data[Object.keys(res.data)[0]])];
                this.notifyObservers();
            
        });
    }

    createExperience(name, start_time, end_time, participants) {
        participants.push(UserModel);
        console.log("deltagare", { ...participants.map(p => p.id)});
        
        return createExperienceAPI(localStorage.getItem("refreshToken"), name,start_time, end_time, { ...participants.map(p => p.id)}).then((res) => {
            UserModel.addExperience(res.data.exp_id);
            this.listenToExperienceData(res.data.exp_id);
            return res;
        });
    }

    listenToExperienceData(id:string) {
        listenToExperienceAPI(id);
        socket.on("experience", (data) => {
            this.id = data.id;
            this.name = data.name;
            this.participants = data.participants;
            this.start_time = data.start_time;
            this.end_time = data.end_time;
            this.template = data.template;
            this.posts = data.posts;
            this.creator = data.creator;
            this.notifyObservers();
            console.log("log från experiencemodel", this.name);
        });
    }
}

export default ExperienceModel;