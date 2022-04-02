import express, { Request, Response, NextFunction } from "express";
import { userStore } from "../Model/Schema";
const route_store = express.Router();
route_store.get("", async (req: Request, res: Response) => {
  try {
    let data = await userStore.find();
    res.status(200).send(data);
  } catch (error: any) {
    res.status(404).send("page not found");
  }
});
// for shoes
route_store.get("/shoes", async (req: Request, res: Response) => {
  try {
    let data = await userStore.find({ category: "Shoes" });
    res.status(200).send(data);
  } catch (error: any) {
    res.status(404).send("page not found");
  }
});

//for Tshirt
route_store.get("/tshirt", async (req: Request, res: Response) => {
  try {
    let data = await userStore.find({ category: "T-shirt" });
    res.status(200).send(data);
  } catch (error: any) {
    res.status(404).send("page not found");
  }
});

//for Jeans
route_store.get("/jeans", async (req: Request, res: Response) => {
  try {
    let data = await userStore.find({ category: "Jeans" }).then((resolve) => {
      res.status(200).send(resolve);
    });
  } catch (error: any) {
    res.status(404).send("page not found");
  }
});

export { route_store };
