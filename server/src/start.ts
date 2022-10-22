import express from "express";
import path from "path";
import https from "https";
import fs from 'fs';
import cors from "cors";
import users from './routes/users';
import experiences from './routes/experiences';
import upload from './routes/upload';
import { db, store, listenToUser, storage, listenToExperience } from "../firebase";
import { onValue, ref } from "firebase/database";
import Multer, { diskStorage } from 'multer';
import { Blob } from "buffer";
import { checkAuth } from "./middlewares/auth";

const app = express();
const port = process.env.PORT || 8081;

const router = express.Router();

const options = {
    key: fs.readFileSync("./cert/cert.key"),
    cert: fs.readFileSync("./cert/cert.crt")
};

if (!(process.env.NODE_ENV === "production")) {
    app.use(cors({  credentials: true, origin: 'https://localhost:3000'   }));
}

app.use(express.json());
app.use(express.static(path.join(__dirname, "../../dist")));

app.use(router);

app.get("/", (req: express.Request, res: express.Response) => {
    const htmlFile = path.join(__dirname, "../../dist/index.html");

    res.status(200).send(htmlFile);
});

app.use("/api/users", users);
//app.use("/api/upload", upload);

////////////////////////////////////////////////////////////////

/*
var mulStorage = Multer.diskStorage({
    destination: function (req, file, cb) {
      cb(null, 'uploads/')
    },
    filename: function (req, file, cb) {
      cb(null, Date.now() + path.extname(file.originalname)) //Appending extension
    }
  })

const multer = Multer({
    storage: mulStorage,
    limits: {fileSize: 5 * 1024 * 1024} //File size limit 5mb
})*/////////////////////


const multer = Multer({
    storage: Multer.memoryStorage(),
    limits: {
      fileSize: 5 * 1024 * 1024, // No larger than 5mb, change as you need
    },
  });  


router.route("/api/upload").post(multer.single("imgfile"), (req: express.Request, res: express.Response) => {
    console.log(req)
    try {
        if(req.file){
            console.log(req.file.buffer);
            /*
            const buff = Buffer.from(req.file.buffer); // Node.js Buffer
            const blob = new Blob([buff], {type: "image"});
            console.log(typeof blob)*/
            store(req.file.buffer);
            
            res.status(200).send("File uploaded to Cloud Storage");
        }
    } catch (error) {
        res.status(500).send(error)
    }
});



////////////////////////////////////////////////////////////////

//uses users.ts

app.use("/api/experiences", experiences);
//uses experiences.ts




const server = https.createServer(options, app);

server.listen(port, () => {
    console.log(`Server is listening on port: ${port}`);
})

const io = require("socket.io")(server, {
    cors: {
        origin: "https://localhost:3000",
        methods: ["GET", "POST"]
    }
});

io.on('connection', (socket:any) => {
    console.log("den är connectad");
    // Lite kod som man kan använda för att eventuellt unsubscriba till FB
    /*
    const unsubscribe:any = [];
    
    socket.on("disconnect", (reason: any) => {
        unsubscribe.forEach((callback:any) => callback());
        console.log(reason);
      });
    */
});

app.post("/api/listeners/user", checkAuth, (req: express.Request, res: express.Response) => {
    listenToUser(res.locals.user.user_id, (val:any) => {io.sockets.emit("user", val)});
    res.status(200).send("Listening to user");
    console.log("började lyssna")
});

app.post("/api/listeners/experience", checkAuth, (req: express.Request, res: express.Response) => {
    listenToExperience(req.body.id, (val:any) => {io.sockets.emit("experience", val)});
    res.status(200).send("Listening to exp");
});
/*
app.post("/upload", (req: express.Request, res: express.Response) => {
    console.log("Inne i post fil")
    try {
        if(req){
            console.log("inne i if(req)")
            store(req)
            res.status(200).send("File uploaded to Cloud Storage");
        }
    } catch (error) {
        res.status(500).send(error)
    }
});
*/


