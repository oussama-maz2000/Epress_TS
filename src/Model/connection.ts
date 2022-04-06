import mongoose from "mongoose";
import { MongoClient } from "mongodb";
import dotenv from "dotenv";
dotenv.config();
const URL: any = process.env.DATABASE_URL;
export function connect() {
  let DB: object = {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  };
  try {
    let client = mongoose.connect(URL, DB);
    console.log("database connected ...");
  } catch (err: any) {
    console.log(err.message);
  }
}
