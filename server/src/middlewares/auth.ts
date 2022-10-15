import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword } from "firebase/auth";
import { User } from '../models/types';
import express from "express";

const auth = getAuth();

const authFirebase = (req: express.Request, res: express.Response, next: express.NextFunction) => {

    // Kolla på det finns en token
    // då next();
    //Annars Ska man returnera fel koden för att man inte har auth res.send.401 eller vad det blir
}

const createAccountFirebase = (req: express.Request, res: express.Response, next: express.NextFunction) => {

    createUserWithEmailAndPassword(auth, req.body.email, req.body.password)
    .then(() => next())
    .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        console.log(errorMessage);
        return errorMessage;
    });
}
/*
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
}*/

export { authFirebase, createAccountFirebase};
