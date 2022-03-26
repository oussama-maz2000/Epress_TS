import mongoose from "mongoose";

let schema = new mongoose.Schema({
  id: Number,
  username: String,
  password: String,
  confirmpassword: String,
});
export let userModel = mongoose.model("users", schema);
