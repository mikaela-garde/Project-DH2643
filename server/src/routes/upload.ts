import express from "express";
import { Express } from "express";
import { reload } from "firebase/auth";
import { get, set, ref } from "firebase/database";
import { db, store, listenToUser, storage } from "../../firebase";
import Multer from 'multer';

const multer = Multer({
    storage: Multer.memoryStorage(),
    limits: {fileSize: 5 * 1024 * 1024} //File size limit 5mb

})


const router = express.Router();

router.route("/").post(multer.single("imgfile"), (req: express.Request, res: express.Response) => {
    console.log("innne i")
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