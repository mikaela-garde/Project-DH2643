import express from "express";
import { get, ref } from "firebase/database";
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";
import db from '../../firebase';


const router = express.Router();

router.route("/").get((req: express.Request, res: express.Response) => {
    const user_ref = ref(db, 'users');
    get(user_ref).then((snapshot) => {
        const data:any = snapshot.val();
        res.status(200).send(data);
    })
});


router.route("/:userid").get((req: express.Request, res: express.Response) => {
    console.log("Im in the users");
    res.status(200).send({someData: "all good" + req.params.userid})
});
/*
const auth = getAuth();
createUserWithEmailAndPassword(auth, email, password)
    .then((userCredential) => {
        //Signed in
        const user = userCredential.user;
    })
    .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
    })
*/

export default router;