import express, { Request, Response, NextFunction } from "express";
import { signVerification } from "../Helps/validation";
import { hashing_password } from "../Helps/cryptPass";
import { userModel } from "../Model/Schema";
export let route = express.Router();
route.post("/signup", async (req, res) => {
  try {
    //check the input data from client
    let { error } = await signVerification(req.body);
    if (error) return res.status(401).send(error.details[0].message);

    //hashing the password just pass the req.body.password to the function
    let hash = await hashing_password(req.body.password);
    let new_user: object = {
      id: req.body.id,
      username: req.body.username,
      email: req.body.email,
      password: hash,
      confirmpassword: hash,
    };
    let save_user = new userModel(new_user);
    await save_user.save();

    res.status(200).send(req.body);
  } catch (err: any) {
    res.status(400).json({
      status: "fail",
      message: err.message,
    });
  }
});

/* export const get_users = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    let data = await userModel.find();
    res.status(200).send(data);
  } catch (err: any) {
    res.status(401).send(err.message);
  }
  next();
}; */
