import express, { Request, Response, NextFunction } from "express";
import mysql from "mysql";
import dotenv from "dotenv";
import * as bodyParser from "body-parser";
import { connect } from "./Model/connection";
import { route } from "./Controllers/routersUser";
import { route_store } from "./Controllers/routersStore";
import globaleErr from "./Errors/Err_Middlware";
const app = express();
app.use(express.json());
dotenv.config();

connect();
//app.set("view engine", "hbs");
app.use(route);
app.use("/store", route_store);
app.use(globaleErr);

app.get("/", (req: Request, res: Response, next: NextFunction) => {
  res.status(200).send("welcome ");
});

app.listen(3001, () => {
  console.log("server started on port 3001");
});

