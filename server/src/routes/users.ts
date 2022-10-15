import express from "express";
import { reload } from "firebase/auth";
import { get, set, ref } from "firebase/database";
import db from '../../firebase';
import  {authFirebase, createAccountFirebase} from "../middlewares/auth";
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

}).post(createAccountFirebase, (req: express.Request, res: express.Response) => {
    
    console.log("posting user");
    const user: User = {
        id: req.body.uid,
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
    set(ref(db, 'users/' + user.id), user);
    res.status(200).send(user);
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
export default router;