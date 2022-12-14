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
import { checkAuth, checkAuthUpload} from "./middlewares/auth";

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

router.route("/api/upload").post( multer.any(), (req: express.Request, res: express.Response) => {
    try {
        if(req.files){
            //@ts-ignore
            const promise = checkAuthUpload(req, res).then((res:any) => res.json())
            .then((json:any) => {
            const userId = json.user_id;
           
            //@ts-ignore
            const expId = req.files[1].buffer.toString().replaceAll('"', "")
            //@ts-ignore
            const date = req.files[2].buffer.toString().replaceAll('"', "")
            //@ts-ignore
            const caption = req.files[3].buffer.toString().replaceAll('"', "")
            //@ts-ignore
            const uploaderName = req.files[4].buffer.toString().replaceAll('"', "")
            //@ts-ignore
            const file = req.files[5].buffer
            //@ts-ignore
            const fileName = req.files[5].originalname
            storeFile(userId, expId, date, caption, uploaderName, file, fileName, res );

            })
            .catch((error:any) => console.log("api/upload", error));
          }
            

        }
     catch (error) {
        res.status(500).send(error)
    }
});

router.route("/api/upload").get((req: express.Request, res: express.Response) => {
    try {
        fetchFile("00b40d86-aaf6-410b-83a8-9517c4aac101.jpeg", res);
    } catch (error) {
        res.status(500).send(error)
    }
});


////////////////////////////////////////////////////////////////

app.use("/api/experiences", experiences);
//uses experiences.ts

const server = https.createServer(options, app);

server.listen(port, () => {
    //console.log(`Server is listening on port: ${port}`);
})

const io = require("socket.io")(server, {
    cors: {
        origin: "https://localhost:3000",
        methods: ["GET", "POST"]
    }
});

io.on('connection', (socket:any) => {
    // Lite kod som man kan anv??nda f??r att eventuellt unsubscriba till FB
    /*
    const unsubscribe:any = [];
    
    socket.on("disconnect", (reason: any) => {
        unsubscribe.forEach((callback:any) => callback());
        console.log(reason);
      });
    */
});

app.post("/api/listeners/user", checkAuth, (req: express.Request, res: express.Response) => {
    listenToUser(res.locals.user.user_id, (val:any) => {io.sockets.emit("users", val)});
    res.status(200).send("Listening to user");
});

app.post("/api/listeners/experience", checkAuth, (req: express.Request, res: express.Response) => {
    //io.sockets.removeAllListeners("experience")
    listenToExperience(req.body.exp_id, (val:any) => {io.sockets.emit("experience", val)});
    res.status(200).send("Listening to exp");
});
