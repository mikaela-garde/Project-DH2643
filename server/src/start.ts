import express from "express";
import path from "path";
import https from "https";
import fs from 'fs';
import cors from "cors";
import users from './routes/users';

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

router.get("/api/getsomedata", (req: express.Request, res: express.Response) => {
    console.log("Im in the getstuff routexD");
    setTimeout(() => {
        res.status(200).send({someData: "all good"})
    }, 1000)
})


//router.post() sensitive data t.ex auth


const server = https.createServer(options, app);
const io = require("socket.io")(server, {
    cors: {
        origin: "https://localhost:3000",
        methods: ["GET", "POST"]
    }
});
io.on('connection', (socket:any) => {
    socket.emit("hello", "world");
});
server.listen(port, () => {
    console.log(`Server is listening on port: ${port}`);
});