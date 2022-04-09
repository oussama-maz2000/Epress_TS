import express, { Request, Response, NextFunction } from "express";

import dotenv from "dotenv";

import { connect } from "./src/Model/connection";
import { route_store } from "./src/Controllers/routersStore";
import globaleErr from "./src/Errors/Err_Middlware";
import HandleErr from "./src/Errors/HandleErr";
dotenv.config();
const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

let port = process.env.PORT || 3001;
console.log("port numbet ", port);
connect();
//app.set("view engine", "hbs");

app.use("/api", route_store);
app.use(globaleErr);

app.get("/", (req: Request, res: Response, next: NextFunction) => {
  res.status(200).send("welcome ");
});
app.all("*", (req: Request, res: Response, next: NextFunction) => {
  // next(new HandleErr("invalid route", 404));

  res.status(404).json({
    error: "invalid route ",
    routers: {
      all: "/api",
      shoes: "/api/shoes",
      tshirt: "/api/tshirt",
      jeans: "/api/jeans",
      sport: "/api/sport",
    },
  });
});

app.listen(port, () => {
  console.log("server started on port 3001");
});
