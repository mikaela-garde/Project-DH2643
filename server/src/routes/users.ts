import express from "express";
import { reload } from "firebase/auth";
import { get, set, ref } from "firebase/database";
import {db} from '../../firebase';
import  {signInFirebase, createAccountFirebase} from "../middlewares/auth";
import { User } from "../models/types";


const router = express.Router();

//Get all users
router.route("/").get((req: express.Request, res: express.Response) => {
    //Get users from database
    const user_ref = ref(db, 'users');
    get(user_ref).then((snapshot) => {
        const data:any = snapshot.val();
        res.status(200).send(data);
    });

})

router.route("/signup").post(createAccountFirebase, (req: express.Request, res: express.Response) => {
    
    console.log("posting user");
    const user: User = {
        id: res.locals.user.uid,
        email: req.body.email,
        first_name: req.body.firstName,
        last_name: req.body.lastName,
        social_media: [],
        description: "",
        profile_img: "",
        friends: [],
        friend_requests: [],
        experiences: [],
        notifications: [],
        dark_mode: false
    }
    
    //Set in database
    set(ref(db, 'users/' + user.id), user); //Lägga till .then och sen skicka
    res.status(200).send({userDB: user, userAuth: res.locals.user, success: true});
});

//Get user data from id
router.route("/:userid").get((req: express.Request, res: express.Response) => {
    
    //Get specified user from database
    console.log("i ensam user");
    const user_ref = ref(db, 'users/' + req.params.userid);
    get(user_ref).then((snapshot) => {
        const data:any = snapshot.val();
        res.status(200).send(data);
    });

});

//Get user data from id
router.route("/login").post(signInFirebase, (req: express.Request, res: express.Response) => {
    res.status(200).send({userAuth: res.locals.user, success: true});
});



export default router;