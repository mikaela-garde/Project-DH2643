import express from "express";
import path from "path";
import https from "https";
import fs from 'fs';
import cors from "cors";
import users from './routes/users';
import { db, listenToUser } from "../firebase";
import { onValue, ref } from "firebase/database";

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
