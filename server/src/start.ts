import express from "express";
import path from "path";
import https from "https";
import fs from 'fs';
import cors from "cors";
import users from './routes/users';
import upload from './routes/upload';
import { db, store, listenToUser, storage } from "../firebase";
import { onValue, ref } from "firebase/database";
import Multer, { diskStorage } from 'multer';

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
})



router.route("/api/upload").post(multer.single("imgfile"), (req: express.Request, res: express.Response) => {
    console.log(req)
    try {
        if(req.file){
            console.log(typeof req.file);
            store(req.file);
            res.status(200).send("File uploaded to Cloud Storage");
        }
    } catch (error) {
        res.status(500).send(error)
    }
});



////////////////////////////////////////////////////////////////

//uses users.ts


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

app.post("/api/listeners/user", (req: express.Request, res: express.Response) => {
    listenToUser(req.body.uid, (val:any) => {io.sockets.emit("user", val)});
    res.status(200).send("Listening to user");
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


