import { socket } from "./app";
import {User, Image, Social_Media, Friend_request, Notifications} from "./types";
import {createAccountAPI, listenToUserAPI, loginAPI, getUidFromTokenAPI, toggleDarkMode} from "./webAPI/webAPI";

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
    experiences: string[];
    notifications: Notifications[];
    dark_mode: boolean;
    subscribers: Array<any>;
    signInErrorMsg: string;
    signErrorMsg: string;
    accessToken: string;
    isLoggedIn: boolean;

    constructor(){       
        this.id;
        this.email;
        this.first_name;
        this.last_name;
        this.social_media;
        this.description;
        this.profile_img;
        this.friends; //Ska man lägga in hela användaren här eller vara ett id
        this.friend_requests;
        this.experiences = [];
        this.notifications;
        this.dark_mode = false;
        this.subscribers =[];
        this.signInErrorMsg;
        this.signErrorMsg;
        this.accessToken;
        this.isLoggedIn;
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
        createAccountAPI(firstName, lastName, email, password, image).then(( { data }: { data: any  }) => {
            if (data.success) {
                localStorage.setItem("refreshToken", data.userAuth.stsTokenManager.refreshToken);
                this.listenToUserData(data.userAuth.uid);
                this.setIsLoggedIn(true);
                // subscribeToFirebase(): här ska vi nu subscriba till Firebase
                // hur man använder refresh token för att få en ID token som vi sen kan använda för att skicka requests:
                // https://firebase.google.com/docs/reference/rest/auth/#section-refresh-token
            }
            else {
                // här ska vi visa felmeddelandet för användaren
                this.setSignErrorMsg(data.error);
            }
            });
    }

    SignInFB(email, password) {
        loginAPI(email, password).then(( { data }: { data: any  }) => {
            if (data.success) {
                localStorage.setItem("refreshToken", data.userAuth.stsTokenManager.refreshToken);
                this.accessToken = data.userAuth.stsTokenManager.accessToken;
                this.listenToUserData(data.userAuth.uid);
                this.setIsLoggedIn(true);
                // subscribeToFirebase(): här ska vi nu subscriba till Firebase
                // hur man använder refresh token för att få en ID token som vi sen kan använda för att skicka requests:
                // https://firebase.google.com/docs/reference/rest/auth/#section-refresh-token
            }
            else {
                // här ska vi visa felmeddelandet för användaren
                this.setSignErrorMsg(data.error);
            }});
        //let user = new Promise(signInFirebase(email, password));
        //console.log(user);
    }

//Get user data when a refresh token exists
    getUserFromToken(token: any) {
        getUidFromTokenAPI(token).then(( { data }: { data: any  }) => {
            if (data.success) {
                console.log("nu har vi accessat användaren fb", data);
                this.listenToUserData(localStorage.getItem("refreshToken"));
                this.setUid(data.user.user_id);
                this.setIsLoggedIn(true);
            } else {
                this.signInErrorMsg = data.error;
                this.notifyObservers();
                console.log("det blev error", data);
            }
        }).catch(error => {
            console.log(error);
            this.setIsLoggedIn(false);
        });
    }

    listenToUserData(token) {
        listenToUserAPI(token);
        console.log("den kom hit")
        socket.on("user", (data) => {
            this.id = data.id;
            console.log("det funka");
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

    setDarkMode(dark_mode: boolean) {
        toggleDarkMode(localStorage.getItem("refreshToken"), dark_mode);
        this.notifyObservers();
    }
    setIsLoggedIn(boolean) {
        this.isLoggedIn = boolean;
        this.notifyObservers();
    }

    logoutUser() {
        localStorage.removeItem("refreshToken");
        window.location.reload();
    }

    addExperience(id: string) {
        this.experiences = [...this.experiences, id];
        console.log("exp i user", this.experiences);
        this.notifyObservers();
    }


    setSignErrorMsg(msg) {
        if (msg == "Firebase: Error (auth/invalid-email).") {
            this.signErrorMsg = "Invalid Email."
        } else if (msg == "Firebase: Password should be at least 6 characters (auth/weak-password).") {
            this.signErrorMsg = "Password should be at least 6 characters."
        } else if (msg == "Firebase: Error (auth/missing-email).") {
            this.signErrorMsg = "Missing Email.";
        } else if (msg == "Firebase: Error (auth/email-already-in-use).") {
            this.signErrorMsg = "Email already in use.";
        } else if (msg == "Firebase: Error (auth/wrong-password).") {
            this.signErrorMsg ="Wrong Password."
        }
        else {
            this.signErrorMsg = msg
        }
        this.notifyObservers();
    }

    regExSignUp(first_name, last_name) {
        if (new RegExp(/^[a-zA-Z]+$/).test(first_name) == false) {
            this.setSignErrorMsg("First name can only be letters and can't be empty.");
            return false;
        } else if (new RegExp(/^[a-zA-Z]+$/).test(last_name) == false){
            this.setSignErrorMsg("Last name can only be letters and can't be empty.");
            return false;
        } else {
            this.setSignErrorMsg("");
            return true;
        }
    };
}
export default UserModel;