import express from "express";

const app = express();
const portNum = 4000;
const listeningPort = () =>
  console.log(`Listening on http:localhost:${portNum}`);

const simpleJson = {
  name: "ryokuman",
  age: 21,
};

function test() {
  return simpleJson;
}

app.get("/", (req, res) => res.json(test));

app.listen(portNum, listeningPort);
