import exp from "constants";
import { Experience, User, Experience_Template, Post } from "./types";
import { getUserFromEmailAPI } from "./webAPI/webAPI";

class ExperienceModel {
    id: string;
    name: string;
    participants: any[];
    start_time: string;
    end_time: string;
    template: Experience_Template;
    posts: Post[];
    subscribers:Array<any> =[];

    constructor() {
        this.id = "";
        this.name = "";
        this.participants = [];
        this.start_time = "";
        this.end_time = "";
        this.template = Experience_Template.Timeline;
        this.posts = [];
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

    addParticipant(email: string){
        getUserFromEmailAPI(email).then((res) => {
            //Get the first property in the response object
            console.log(res.data);
                this.participants.push(res.data[Object.keys(res.data)[0]]);
                this.notifyObservers();
            
        });
    }
}

export default ExperienceModel;