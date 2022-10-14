import {User, Social_Media, Friend_request, Notifications} from "./types";
import {createAccountFirebase} from "./webAPI/firebaseAuth";

class UserModel {
    /** Model containing information for the logged in user from firebase*/
    id: string;
    email: string;
    first_name: string;
    last_name: string;
    password: string; //Bara när den kommer in från clienten
    social_media: {
        platform: Social_Media,     
        url: string}[];
    description: string | null;
    profile_img: string;
    friends: number[]; //Ska man lägga in hela användaren här eller vara ett id
    friend_requests: Friend_request[];
    experiences: number[];
    notifications: Notifications[];
    dark_mode: boolean;
    subscribers: Array<any>;

    constructor(user: User/*id = "", token = "", displayName = "", img = null*/){

        this.id = user.id;
        this.email = user.email;
        this.first_name = user.first_name;
        this.last_name = user.last_name;
        this.social_media = user.social_media;
        this.description = user.description;
        this.profile_img = user.profile_img;
        this.friends = user.friends; //Ska man lägga in hela användaren här eller vara ett id
        this.friend_requests = user.friend_requests;
        this.experiences = user.experiences;
        this.notifications = user.notifications;
        this.dark_mode = user.dark_mode;
        this.subscribers =[];
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


    createNewUserFB(firstName, lastName, email, password) {

        createAccountFirebase(email, password, firstName, lastName);
        this.notifyObservers();
    }

    setEmail(email: string) {
        this.email = email; // API call to server to set email in FB
        this.notifyObservers();
    }

    setUid(id) {
        this.id = id;
        this.notifyObservers();
    
    }
}
export default UserModel;