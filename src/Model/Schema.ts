import mongoose from "mongoose";

export const schemaStore = new mongoose.Schema({
  id: { type: Number },

  title: { type: String, unique: true, required: true },

  price: { type: String, required: true },

  size: { type: [String], required: true },

  category: { type: String, required: true },

  description: { type: String },

  image: { type: [String], required: true },

  available: { type: Boolean },
});

export let userStore = mongoose.model("stores", schemaStore);
