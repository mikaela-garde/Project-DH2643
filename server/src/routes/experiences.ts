import express from "express";
import { get, set, ref, orderByKey, query, orderByChild, equalTo, onValue, update, push } from "firebase/database";
import {db} from '../../firebase';
import  {checkAuth} from "../middlewares/auth";
import { Experience, Post, Experience_Template } from "../models/types";
import { v4 as uuid } from 'uuid';

const router = express.Router();

router.route("/fetch").post(checkAuth, (req: express.Request, res: express.Response) => {
    
    //Get experiences in database
    get(ref(db, 'experiences/' + req.body.id)).then((snapshot) => {
            if (snapshot.exists()) {
              res.status(200).send({data: snapshot.val(), success: true});
            } else {
              console.log("No data available");
            }
    });
});

router.route("/create").post(checkAuth, (req: express.Request, res: express.Response) => {
    console.log("creating");
    const exp: Experience = {
        id: uuid(),
        name: req.body.name,
        participants: req.body.participants,
        start_time: req.body.start_time,
        end_time: req.body.end_time,
        template: Experience_Template.Timeline,
        posts: [],
        creator: res.locals.user.user_id,
        img: ""
    }
    console.log("locasl utanför auth", res.locals.user.user_id)
    
    //Set in database
    set(ref(db, 'experiences/' + exp.id), exp).then(() => {
        console.log("Experiencen är skapadt", exp.participants);
    
        //Set in participants array with exp
        exp.participants.map(p => {
            console.log("det här är en particiapnt ",p);
            return push(ref(db, 'users/' + p + '/experiences'), [exp.id]).then(()  => {console.log("heej")});
        });

    });
    res.status(200).send({exp_id: exp.id, success: true});
});

export default router;