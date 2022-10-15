<<<<<<< Updated upstream
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";
import firebaseConfig from '../../firebase-config';
=======
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword} from "firebase/auth";
import firebaseConfig from '../firebase-config';
>>>>>>> Stashed changes
import { initializeApp } from 'firebase/app';
import {User} from "../types";
import { postAPI, getUserAPI} from "./webAPI";

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

const signInFirebase = (email, password) => {
  signInWithEmailAndPassword(auth, email, password)
  .then((userCredential) => {
    console.log("signup complete");
    getUserAPI(userCredential.user.uid).then(( { data }: { data: User }) => {
      console.log(data);
      return data;
    })
  }).catch((error) => {
    const errorCode = error.code;
    const errorMessage = error.message;
    console.log(error);
  });
}



export { createAccountFirebase, signInFirebase};
