import express from "express";
import path from "path";
import https from "https";
import fs from 'fs';
import cors from "cors";
import users from './routes/users';
import experiences from './routes/experiences';
import { db, storeFile, fetchFile, listenToUser, storage, listenToExperience } from "../firebase";
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
//uses users.ts

///////////////////// MULTER & UPLOAD FILE TO CLOUD///////////////////////

const multer = Multer({
    storage: Multer.memoryStorage(),
    limits: {
      fileSize: 5 * 1024 * 1024, // No larger than 5mb, change as you need
    },
  });  

router.route("/api/upload").post(multer.single("imgfile"), (req: express.Request, res: express.Response) => {
    try {
        if(req.file){
            storeFile(req.file.buffer, req.file.originalname, res);
        }
    } catch (error) {
        res.status(500).send(error)
    }
});

router.route("/api/upload").get((req: express.Request, res: express.Response) => {
    try {
        fetchFile("c453d824-e681-4a9a-91a5-0f03544dade7.jpeg", res);
    } catch (error) {
        res.status(500).send(error)
    }
});


////////////////////////////////////////////////////////////////

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

app.post("/api/listeners/user", (req: express.Request, res: express.Response) => {
    listenToUser(req.body.uid, (val:any) => {io.sockets.emit("user", val)});
    res.status(200).send("Listening to user");
});

app.post("/api/listeners/experience", (req: express.Request, res: express.Response) => {
    listenToExperience(req.body.id, (val:any) => {io.sockets.emit("experience", val)});
    res.status(200).send("Listening to user");
});


