import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";
import express from "express";

const auth = getAuth();

const authFirebase = (req: express.Request, res: express.Response, next: express.NextFunction) => {

    createUserWithEmailAndPassword(auth, req.body.email, req.body.password)
    .then((userCredential) => {
        console.log("inne i auth2");
        //Signed in
        const user = userCredential.user;
        return user;
    })
    .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        console.log(errorMessage);
        return errorMessage;
    });
    next();
}

export default authFirebase;
