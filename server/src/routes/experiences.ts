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

                var img = "";
                const posts = snapshot.val().posts;
                if(snapshot.val().posts) {
                    img = posts[Object.keys(posts)[0]].imgURL;
                }

                const exp = {
                    id: snapshot.val().id,
                    name: snapshot.val().name,
                    creator: snapshot.val().creator,
                    start_time: snapshot.val().start_time,
                    end_time: snapshot.val().end_time,
                    participants: snapshot.val().participants,
                    template: snapshot.val().template,
                    img: img
                }
              res.status(200).send({data: exp, success: true});
            } else {
              console.log("No data available");
            }
    });
});

router.route("/create").post(checkAuth, (req: express.Request, res: express.Response) => {
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
    
    //Set in database
    set(ref(db, 'experiences/' + exp.id), exp).then(() => {
    
        //Set in participants array with exp
        exp.participants.map(p => {
            return push(ref(db, 'users/' + p + '/experiences'))
        });

    });
    res.status(200).send({exp_id: exp.id, success: true});
});

export default router;