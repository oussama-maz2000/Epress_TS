import express, { Request, Response, NextFunction } from "express";
import { userStore } from "../Model/Schema";
import HandleErr from "../Errors/HandleErr";
const route_store = express.Router();
route_store.get("", async (req: Request, res: Response, next: NextFunction) => {
  try {
    let data = await userStore.find();
    res.status(200).send(data);
  } catch (error: any) {
    next(new HandleErr(error.message, 404));
  }
});
// for shoes
route_store.get(
  "/shoes",
  async (req: Request, res: Response, next: NextFunction) => {
    try {
      let data = await userStore.find({ category: "Shoes" });
      res.status(200).send(data);
    } catch (error: any) {
      // res.status(404).send("page not found");
      next(new HandleErr(error.message, 404));
    }
  }
);

//for Tshirt
route_store.get(
  "/tshirt",
  async (req: Request, res: Response, next: NextFunction) => {
    try {
      let data = await userStore.find({ category: "T-shirt" });
      res.status(200).send(data);
    } catch (error: any) {
      //res.status(404).send("page not found");
      next(new HandleErr(error.message, 404));
    }
  }
);

//for Jeans
route_store.get(
  "/jeans",
  async (req: Request, res: Response, next: NextFunction) => {
    try {
      let data = await userStore.find({ category: "Jeans" }).then((resolve) => {
        res.status(200).send(resolve);
      });
    } catch (error: any) {
      //res.status(404).send("page not found");
      next(new HandleErr(error.message, 404));
    }
  }
);

route_store.get(
  "/sport",
  async (req: Request, res: Response, next: NextFunction) => {
    try {
      let data = await userStore.find({ category: "sport" });
      res.status(200).send(data);
    } catch (error: any) {
      //res.status(401).send(error);
      next(new HandleErr(error.message, 404));
    }
  }
);

route_store.get(
  "/:id",
  async (req: Request, res: Response, next: NextFunction) => {
    try {
      let last_id = await userStore.findOne().sort({ id: -1 });
      let id_Product = +req.params.id;
      if (last_id > id_Product) {
        let data = await userStore.findOne({ id: id_Product });
        res.status(200).send(data);
      } else return next(new HandleErr("error happend please try again ", 404));
    } catch (error: any) {
      console.log(error.message);
    }
  }
);
export { route_store };
