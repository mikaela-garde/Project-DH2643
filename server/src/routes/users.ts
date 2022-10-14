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

}).post(authFirebase, (req: express.Request, res: express.Response) => {
    
    console.log("posting user");
    const user: User = req.body;
    
    //Set in database
    const user_ref = ref(db, 'users');
    set(ref(db, 'users/' + user.id), {
        id: user.id,
        email: user.email,
        first_name: user.first_name,
        last_name: user.last_name
    });
    res.status(200).send({someData: "all good"})
});
export default router;