import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword } from "firebase/auth";
import { User } from '../models/types';
import express from "express";
import fetch from 'node-fetch';

const auth = getAuth();

const authFirebase = (req: express.Request, res: express.Response, next: express.NextFunction) => {

    // Kolla på det finns en token
    // då next();
    //Annars Ska man returnera fel koden för att man inte har auth res.send.401 eller vad det blir
}

const checkAuth = (req: express.Request, res: express.Response, next: express.NextFunction) => {
  fetch('https://securetoken.googleapis.com/v1/token?key=AIzaSyBfZR7iec4_6_AbFzQliaLBq326x3FS91I', {
    method: 'POST',
    body: "grant_type=refresh_token&refresh_token=" + req.body.token,
    headers: { 'Content-Type': 'application/x-www-form-urlencoded' }
    }).then((res:any) => res.json())
    .then((json:any) => {
      if (json.error) {
        res.status(200).send({success: false, error: json.error});
      } else {
        res.locals.user = json;
        next();
      }
    })
    .catch((error:any) => res.status(200).send({success: false, error: error}));
}

const checkAuthUpload = (req: express.Request, res: express.Response) => {
  //@ts-ignore
  if (req.files) {

  return fetch('https://securetoken.googleapis.com/v1/token?key=AIzaSyBfZR7iec4_6_AbFzQliaLBq326x3FS91I', {
    method: 'POST',
    //@ts-ignore
    body: "grant_type=refresh_token&refresh_token=" + req.files[0].buffer.toString().replaceAll('"', ""),
    headers: { 'Content-Type': 'application/x-www-form-urlencoded' }
    })
}}

const createAccountFirebase = (req: express.Request, res: express.Response, next: express.NextFunction) => {  

    createUserWithEmailAndPassword(auth, req.body.email, req.body.password)
    .then((userCredential) => {
      res.locals.user = userCredential.user; // res.locals är som props man kan skicka vidare tills nästa middleware
      next();
    })
    .catch((error) => {
        const errorMessage = error.message;
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
      res.status(200).send({success: false, error: errorMessage});
  });
}

export { authFirebase, createAccountFirebase, signInFirebase, checkAuth, checkAuthUpload};
