import express from "express";
import TwitcheeSchema from "../models/TwitcheeSchema";
import request from "request";
import twitch from "../libs/twitch";
import dotenv from "dotenv";

const config = dotenv.config().parsed;
const router = express.Router();

const DEV_MODE = config.DEV_MODE;
const API_KEY = config.API_KEY;
const BASIC_URL = "http://localhost:3000/api";
const CUSTOM_URL = "https://tfw.xyz/api";

router.get("/", (req, res) => {
  res.send(`
    <html>
    <body>
        <h1>Whitelabel Error Page</h1>
        <p>This application has no explicit mapping for /error, so you are seeing this as a fallback.</p>
        <div>There was an unexpected error (type=Not Found, status=404).</div>
    </body>
    </html>  
    `);
});
router.get("/getTwitchees", async (req, res) => {
  if (req.headers.api_key !== API_KEY)
    return res.status(401).send("Unauthorized");
  const twitchees = await TwitcheeSchema.find({});
  res.send(twitchees);
});
router.post("/addTwitchee", async (req, res) => {
  if (req.headers.api_key !== API_KEY)
    return res.status(401).send("Unauthorized");

  const { id, name, status, stream, friends, pfp } = req.body;

  const twitchee = new TwitcheeSchema({
    tfwId: id,
    name: name,
    status: status,
    stream: stream,
    friends: friends,
    pfp: pfp,
  });
  await twitchee.save();
  res.send(twitchee);
});
router.get("/getTwitchee", async (req, res) => {
  if (req.headers.api_key !== API_KEY)
    return res.status(401).send("Unauthorized");

  const twitchee = await TwitcheeSchema.findOne({ tfwId: req.body.tfwId });
  res.send(twitchee);
});
router.post("/deleteTwitchee", async (req, res) => {
  if (req.headers.api_key !== API_KEY)
    return res.status(401).send("Unauthorized");
});
router.get("/getTwitchee/:key", async (req, res) => {
  if (req.headers.api_key !== API_KEY)
    return res.status(401).send("Unauthorized");
  const paramKey = req.params.key;
  const twitchee = await TwitcheeSchema.findOne({ tfwId: req.body.tfwId });

  const obj = JSON.parse(JSON.stringify(twitchee));
  res.send(obj[Object.keys(obj).find((v) => v == paramKey)]);
});
router.post("/customRequest", async (req, res) => {
  if (!req.get("origin").includes("https://www.twitch.tv"))
    return res.send("Unauthorized");

  const { method, reqUrl } = req.body;

  if (method == "GET") {
    request.get(
      DEV_MODE ? BASIC_URL + reqUrl : CUSTOM_URL + reqUrl,
      {
        headers: {
          api_key: API_KEY,
        },
        body: req.body,
        json: true,
      },
      async (err, rs, body) => {
        if (err) return res.send(err);
        res.send(body);
      }
    );
  }
  if (method == "POST") {
    request.post(
      DEV_MODE ? BASIC_URL + reqUrl : CUSTOM_URL + reqUrl,
      {
        headers: {
          api_key: API_KEY,
        },
        body: req.body,
        json: true,
      },
      async (err, rs, body) => {
        if (err) return res.send(err);
        res.send(body);
      }
    );
  }
});
router.post("/customRequest/:paramsId", async (req, res) => {
  const paramsId = req.params.paramsId;

  if (!req.get("origin").includes("https://www.twitch.tv"))
    return res.send("Unauthorized");

  const { method, reqUrl } = req.body;

  if (method == "GET") {
    request.get(
      DEV_MODE
        ? BASIC_URL + reqUrl + "/" + paramsId
        : CUSTOM_URL + reqUrl + "/" + paramsId,
      {
        headers: {
          api_key: API_KEY,
        },
        body: req.body,
        json: true,
      },
      async (err, rs, body) => {
        if (err) return res.send(err);
        res.send(body);
      }
    );
  }
  if (method == "POST") {
    request.post(
      DEV_MODE
        ? BASIC_URL + reqUrl + "/" + paramsId
        : CUSTOM_URL + reqUrl + "/" + paramsId,
      {
        headers: {
          api_key: API_KEY,
        },
        body: req.body,
        json: true,
      },
      async (err, rs, body) => {
        if (err) return res.send(err);
        res.send(body);
      }
    );
  }
});
router.get("/getTwitchPFP", async (req, res) => {
  if (req.headers.api_key !== API_KEY)
    return res.status(401).send("Unauthorized");
  const { username } = req.body;
  const pfp = await twitch.getUserPfp(username);
  res.send(pfp);
});

export default router;
