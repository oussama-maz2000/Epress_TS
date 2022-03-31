import express, { Request, Response, NextFunction } from "express";
import { signVerification, loginVerification } from "../Helps/validation";
import { hashing_password } from "../Helps/cryptPass";
import { userModel } from "../Model/Schema";
import { compare } from "../Helps/cryptPass";
export let route = express.Router();
interface user {
  id: Number;
  username: String;
  email: String;
  password: String;
  confirmpassword: String;
}
route.post("/signup", async (req, res) => {
  try {
    //check the input data from client
    let { error } = await signVerification(req.body);
    if (error) return res.status(401).send(error.details[0].message);

    //hashing the password just pass the req.body.password to the function
    let hash = await hashing_password(req.body.password);
    let new_user: user = {
      id: req.body.id,
      username: req.body.username,
      email: req.body.email,
      password: hash,
      confirmpassword: req.body.password,
    };
    console.log(new_user.email);
    //saving the new user in database
    let check_email = await userModel.findOne({ email: req.body.email });
    if (check_email) return res.status(400).send("email existed before");

    let save_user = new userModel(new_user);
    await save_user.save();

    res.status(200).send("register ...");
  } catch (err: any) {
    res.status(400).json({
      status: "fail",
      message: err.message,
    });
  }
});

route.post("/login", async (req: Request, res: Response) => {
  try {
    //let { email } = req.body;
    let { error } = await loginVerification(req.body);
    if (error) return res.status(401).send(error.details[0].message);

    let user_exist = await userModel.findOne({ email: req.body.email });
    if (!user_exist) return res.status(401).send("user not found");

    let cmp =  compare(user_exist.password, req.body.password);
    console.log(cmp);
    //if (!cmp) return res.status(401).send("invalid password");

    res.status(200).send("hello world");
  } catch (err: any) {
    console.log(err.message);
  }
});
