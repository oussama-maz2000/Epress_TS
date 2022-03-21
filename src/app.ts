import express, { Request, Response } from "express";
import mysql from "mysql";
import dotenv from "dotenv";
import { connect } from "./Model/connection";
import { route } from "./Controllers/routers";
const app = express();
app.use(express.json());
dotenv.config();

connect;
app.set("view engine", "hbs");
app.use(route);
app.listen(3001, () => {
  console.log("server started on port 3001");
});
