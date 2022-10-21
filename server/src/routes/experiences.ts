import express from "express";
import { get, set, ref, orderByKey, query, orderByChild, equalTo, onValue, update } from "firebase/database";
import {db} from '../../firebase';
import  {checkAuth} from "../middlewares/auth";
import { Experience, Post, Experience_Template } from "../models/types";
import { v4 as uuid } from 'uuid';

const router = express.Router();

router.route("/").post(checkAuth, (req: express.Request, res: express.Response) => {
    
    const exp: Experience = {
        id: uuid(),
        name: req.body.name,
        participants: req.body.participants,
        start_time: req.body.start_time,
        end_time: req.body.end_time,
        template: Experience_Template.Timeline,
        posts: [],
        creator: res.locals.user.user_id
    }
    
    //Set in database
    set(ref(db, 'experiences/' + exp.id), exp).then(() => res.status(200).send({exp_id: exp.id, success: true}));
});

export default router;