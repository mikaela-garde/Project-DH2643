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
    .then((userCredential) => {
      res.locals.user = userCredential.user; // res.locals är som props man kan skicka vidare tills nästa middleware
      next();
    })
    .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        console.log(errorMessage);
        res.status(200).send({success: false, error: errorMessage});
    });
}

const signInFirebase = (req: express.Request, res: express.Response, next: express.NextFunction) => {
  signInWithEmailAndPassword(auth, req.body.email, req.body.password)
  .then((userCredential) => {
    res.locals.user = userCredential.user; // res.locals är som props man kan skicka vidare tills nästa middleware
    next();
  })
  .catch((error) => {
      const errorCode = error.code;
      const errorMessage = error.message;
      console.log(errorMessage);
      res.status(200).send({success: false, error: errorMessage});
  });
}

export { authFirebase, createAccountFirebase, signInFirebase};
