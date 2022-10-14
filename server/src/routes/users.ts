import express from "express";
import { get, set, ref } from "firebase/database";
import db from '../../firebase';
import authFirebase from "../middlewares/auth";
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

}).post((req: express.Request, res: express.Response) => {
    
    console.log("posting user");
    const user: User = req.body;
    
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