import express from "express";
import path from "path";
import https from "https";
import fs from 'fs';
import cors from "cors";
import { initializeApp } from 'firebase/app';
import { getDatabase } from "firebase/database";
import firebaseConfig from "../firebaseconfig";
import firebaseConfig from "../firebase-config";


const app = express();

const port = process.env.PORT || 8080;

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



router.get("/api/getsomedata", (req: express.Request, res: express.Response) => {
    console.log("Im in the getstuff routexD");
    setTimeout(() => {
        res.status(200).send({someData: "all good"})
    }, 1000)
})

app.use(router)

app.get("/", (req: express.Request, res: express.Response) => {
    const htmlFile = path.join(__dirname, "../../dist/index.html");

    res.status(200).send(htmlFile);
});


//router.post() sensitive data t.ex auth


const server = https.createServer(options, app);

server.listen(port, () => {
    console.log(`Server is listening on port: ${port}`);
});

/*
//Firebase saker
const firebaseApp = initializeApp(firebaseConfig);
const database = getDatabase(firebaseApp);*/