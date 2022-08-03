import mongoose from "mongoose";
import { Schema } from "mongoose";

export default mongoose.model(
  "Twitchee",
  new Schema({
    tfwId: String,
    name: String,
    status: String,
    stream: String,
    friends: Array,
    pfp: String,
  })
);
