import mongoose from "mongoose";
import { MongoClient } from "mongodb";
import { schemaStore } from "./Schema";
import dotenv from "dotenv";
dotenv.config();
const URL: any = process.env.DATABASE_URL;
const URL_LOCAL: any = process.env.LOCAL_DB;
var local_model: any = null;

export function connect() {
  let DB: object = {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  };
  try {
    let client = mongoose.createConnection(URL);
    console.log("database connected ...");
  } catch (err: any) {
    console.log("error from db", err.message);
  }
}

export function connect_local() {
  let db: object = { useNewUrlParser: true, useUnifiedTopology: true };
  try {
    let client = mongoose.createConnection(URL_LOCAL);
    local_model = client.model("store", schemaStore);
    console.log("database local connected ...");
  } catch (error: any) {
    console.log("error from db", error.message);
  }
}
