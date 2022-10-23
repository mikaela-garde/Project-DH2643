import express from "express";
import { reload } from "firebase/auth";
import { get, set, ref, orderByKey, query, orderByChild, equalTo, onValue, update, push } from "firebase/database";
import {db} from '../../firebase';
import  {signInFirebase, createAccountFirebase, checkAuth} from "../middlewares/auth";
import { User } from "../models/types";


const router = express.Router();

router.route("/signup").post(createAccountFirebase, (req: express.Request, res: express.Response) => {
    
    const user: User = {
        id: res.locals.user.uid,
        email: req.body.email,
        first_name: req.body.firstName,
        last_name: req.body.lastName,
        social_media: [],
        description: "",
        profile_img: req.body.profileImage,
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

    //Get user from email
router.route("/email").post(checkAuth, (req: express.Request, res: express.Response) => {
    const key_ref = query(ref(db, 'users'), orderByChild('email'));
    const email_ref = query(key_ref, equalTo(req.body.email));
    get(email_ref).then((snapshot) => {
        if(snapshot.val() != null){
            const data:any = snapshot.val();
            res.status(200).send(data);
        } else {
            res.status(404).send();
        }
        
    });
});

//Get user data from id
router.route("/login").post(signInFirebase, (req: express.Request, res: express.Response) => {
    res.status(200).send({userAuth: res.locals.user, success: true});
});

//get uid from token
router.route("/getuid").post(checkAuth, (req: express.Request, res: express.Response) => {
    res.status(200).send({ user: res.locals.user, success: true});
});

router.route("/toggle-dark").post(checkAuth, (req: express.Request, res: express.Response) => {
    update(ref(db, 'users/' + res.locals.user.user_id), {
        dark_mode: req.body.dark_mode
      });
    res.status(200).send({ user: res.locals.user, success: true}); // need to also add catch unless this works
});

router.route("/experience").post(checkAuth, (req: express.Request, res: express.Response) => {
    push(ref(db, 'users/' + res.locals.user.user_id + '/experiences/'), [req.body.exp_id]).then(() => {
        res.status(200).send({ user: res.locals.user, success: true})
    }).catch((err) => res.status(200).send({ error: err, success: false}))
     // need to also add catch unless this works
});

export default router;