import express, { Request, Response } from "express";
import { signVerification } from "../Helps/validation";
export let route = express.Router();
route.post("/signup", async (req: Request, res: Response) => {
  try {
    let { error } = await signVerification(req.body);
    console.log(req.body);
    if (error) return res.status(401).send(error.details[0].message);

    res.status(200).send(req.body);
  } catch (err: any) {}
});
