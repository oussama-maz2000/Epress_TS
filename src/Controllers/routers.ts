import express, { Request, Response } from "express";
export let route = express.Router();
route.post("/signup", (req: Request, res: Response) => {
  let user = req.body;
  console.log(user);
});
