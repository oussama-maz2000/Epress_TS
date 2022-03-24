import express, { Request, Response } from "express";
import { signVerification } from "../Helps/validation";
import { hashing_password } from "../Helps/cryptPass";

export let route = express.Router();
route.post("/signup", async (req: Request, res: Response) => {
  try {
    //check the input data from client
    let { error } = await signVerification(req.body);
    if (error) return res.status(401).send(error.details[0].message);

    //hashing the password just pass the req.body.password to the function
    let hash = await hashing_password(req.body.password);

    res.status(200).send(req.body);
  } catch (err: any) {
    res.status(400).json({
      status: "fail",
      message: err.message,
    });
  }
});
