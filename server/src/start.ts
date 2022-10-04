import express from "express";
import path from "path";
import https from "https";
import fs from 'fs';

const app = express();

const port = process.env.PORT || 8080;

//const router = express.Router();
const options = {
    key: fs.readFileSync("./cert/cert.key"),
    cert: fs.readFileSync("./cert/cert.crt")
};

app.use(express.json());
app.use(express.static(path.join(__dirname, "../../dist")));

app.get("/", (req: express.Request, res: express.Response) => {
    const htmlFile = path.join(__dirname, "../../dist/index.html");

    res.status(200).send(htmlFile);
});

const server = https.createServer(options, app);

server.listen(port, () => {
    console.log(`Server is listening on port: ${port}`);
});