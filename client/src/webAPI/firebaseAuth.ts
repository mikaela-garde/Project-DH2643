import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";
import firebaseConfig from '../firebase-config';
import { initializeApp } from 'firebase/app';
import {User} from "../types";
import { postAPI } from "./webAPI";

const firebaseApp = initializeApp(firebaseConfig);

const auth = getAuth();

const createAccountFirebase = (email, password, firstName, lastName) => {

    createUserWithEmailAndPassword(auth, email, password)
    .then((userCredential) => {

      const user: User = {
        id: userCredential.user.uid,
        email: email,
        first_name: firstName,
        last_name: lastName,
        social_media: [],
        description: "",
        profile_img: "",
        friends: [],
        friend_requests: [],
        experiences: [],
        notifications: [],
        dark_mode: false
      }

      postAPI(user).then(( { data }: { data: User }) => console.log(data));
    })
    .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        console.log(errorMessage);
        return errorMessage;
    });
}



export { createAccountFirebase };
