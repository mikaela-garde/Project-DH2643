import { socket } from "./app";
import {User, Image, Social_Media, Friend_request, Notifications} from "./types";
import {createAccountAPI, listenToUserAPI, loginAPI, getUidFromTokenAPI} from "./webAPI/webAPI";

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
    profile_img: Image;
    friends: number[]; //Ska man lägga in hela användaren här eller vara ett id
    friend_requests: Friend_request[];
    experiences: number[];
    notifications: Notifications[];
    dark_mode: boolean;
    subscribers: Array<any>;
    signInErrorMsg: string;
    signUpErrorMsg: string;
    accessToken: string;

    constructor(user: User /*id = "", token = "", displayName = "", img = null*/){

        
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
        this.signInErrorMsg = "";
        this.signUpErrorMsg = "";
        this.accessToken = "";
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


    createNewUserFB(firstName, lastName, email, password, image) {
        console.log(image);
        createAccountAPI(firstName, lastName, email, password, image).then(( { data }: { data: any  }) => {
            if (data.success) {
                localStorage.setItem("refreshToken", data.userAuth.stsTokenManager.refreshToken);
                console.log("Denna refresh token ligger nu i localstorage: " + localStorage.getItem("refreshToken"));
                console.log("det blev inte error", data)
                this.listenToUserData(data.userAuth.uid);
                // subscribeToFirebase(): här ska vi nu subscriba till Firebase
                // hur man använder refresh token för att få en ID token som vi sen kan använda för att skicka requests:
                // https://firebase.google.com/docs/reference/rest/auth/#section-refresh-token
            }
            else {
                // här ska vi visa felmeddelandet för användaren
                this.signInErrorMsg = data.error;
                this.notifyObservers();
                console.log("det blev error", data);
            }
            });
        this.notifyObservers();
    }

    SignInFB(email, password) {
        loginAPI(email, password).then(( { data }: { data: any  }) => {
            if (data.success) {
                localStorage.setItem("refreshToken", data.userAuth.stsTokenManager.refreshToken);
                console.log("Denna refresh token ligger nu i localstorage: " + localStorage.getItem("refreshToken"));
                console.log("det blev inte error", data)
                this.accessToken = data.userAuth.stsTokenManager.accessToken;
                this.listenToUserData(data.userAuth.uid);
                // subscribeToFirebase(): här ska vi nu subscriba till Firebase
                // hur man använder refresh token för att få en ID token som vi sen kan använda för att skicka requests:
                // https://firebase.google.com/docs/reference/rest/auth/#section-refresh-token
            }
            else {
                // här ska vi visa felmeddelandet för användaren
                this.signInErrorMsg = data.error;
                this.notifyObservers();
                console.log("det blev error", data);
            }
            });
        //let user = new Promise(signInFirebase(email, password));
        //console.log(user);
    }

//Get user data when a refresh token exists
    getUserFromToken(token: any) {
        getUidFromTokenAPI(token).then(( { data }: { data: any  }) => {
            if (data.success) {
                console.log("nu har vi accessat användaren fb", data);
                this.listenToUserData(data.user.user_id);
            } else {
                this.signInErrorMsg = data.error;
                this.notifyObservers();
                console.log("det blev error", data);
            }
        });

    }

    listenToUserData(uid:string) {
        listenToUserAPI(uid);
        socket.on("user", (data) => {
            this.id = data.id;
            this.email = data.email;
            this.first_name = data.first_name;
            this.last_name = data.last_name;
            this.social_media = data.social_media;
            this.description = data.description;
            this.profile_img = data.profile_img;
            this.friends = data.friends; //Ska man lägga in hela användaren här eller vara ett id
            this.friend_requests = data.friend_requests;
            this.experiences = data.experiences;
            this.notifications = data.notifications;
            this.dark_mode = data.dark_mode;
            this.notifyObservers();
            console.log("log från usermodel", data);
        });
    }

    setEmail(email: string) {
        this.email = email; // API call to server to set email in FB
        this.notifyObservers();
    }

    setUid(id) {
        this.id = id;
        this.notifyObservers();
    }

    setDarkMode(dark_mode) {
        this.dark_mode = dark_mode;
        this.notifyObservers();
    }
}
export default UserModel;