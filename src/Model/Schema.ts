import mongoose from "mongoose";

let schemaUser = new mongoose.Schema({
  id: {
    type: Number,
    required: true,
    unique: true,
  },
  username: {
    type: String,
    required: true,
    unique: true,
  },
  email: {
    type: String,
    required: true,
  },
  password: {
    type: String,
    required: true,
  },
  confirmpassword: {
    type: String,
    required: true,
  },
});

const schemaStore = new mongoose.Schema({
  id: { type: Number },

  title: { type: String, unique: true, required: true },

  price: { type: String, required: true },

  size: { type: [String], required: true },

  category: { type: String, required: true },

  description: { type: String },

  image: { type: [String], required: true },

  available: { type: Boolean },
});

export let userModel = mongoose.model("users", schemaUser);
export let userStore = mongoose.model("stores", schemaStore);
