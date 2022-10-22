import express from "express";
import { Express } from "express";
import { reload } from "firebase/auth";
import { get, set, ref } from "firebase/database";
import { db, store, listenToUser, storage } from "../../firebase";

const router = express.Router();

router.route("/").post( (req: express.Request, res: express.Response) => {
    try {
        console.log(req.body);
        /*if(req){
            console.log("inne i if(req)")
            // @ts-ignore-check
            store(req)
            res.status(200).send("File uploaded to Cloud Storage");
        }*/
    } catch (error) {
        res.status(500).send(error)
    }
});



export default router;