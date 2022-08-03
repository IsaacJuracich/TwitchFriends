process.on("uncaughtException", function (err) {
  console.error(err);
  console.log("Node NOT Exiting...");
});

import express from "express";
import cors from "cors";
import bodyParser from "body-parser";
import dotenv from "dotenv";
import mongoose from "mongoose";
import http from "http";
import API from "./routes/API";
import CDN from "./routes/CDN";

const env = dotenv.config().parsed;
const app = express();

if (!env) throw new Error("No .env file found");
if (!env.MONGO_URL) throw new Error("No MONGO_URL found");

mongoose.connect(env.MONGO_URL, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

app.use(cors());
app.use(bodyParser.json());
app.use(express.static(__dirname + "/views"));

app.use("/api", API);
app.use("/cdn", CDN);

http.createServer(app).listen(env.SERVER_PORT || 3000, () => {
  console.log(`Server running on port ${env.SERVER_PORT || 3000}`);
});
