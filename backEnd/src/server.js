import express from "express";

const app = express();
const portNum = 4000;
const listeningPort = () =>
  console.log(`Listening on http:localhost:${portNum}`);

app.use("/a", express.static(__dirname + "/public/test.js"));

app.get("/", (req, res) => res.json({ name: "test" }));

app.listen(portNum, listeningPort);
