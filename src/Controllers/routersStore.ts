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
      if (id_Product > last_id.id)
        return next(new HandleErr("this product doesn't exist", 404));
      else {
        let data = await userStore.findOne({ id: id_Product });
        res.status(200).send(data);
      }
    } catch (error: any) {
      next(new HandleErr("error happend", 404));
    }
  }
);

interface ClientData {
  id: Number;
  title: String;
  price: String;
  size: [String];
  category: String;
  description: String;
  image: [String];
  available: Boolean;
}

route_store.post(
  "/insertData",
  async (req: Request, res: Response, next: NextFunction) => {
    try {
      let { id } = await userStore.findOne().sort({ id: -1 });
      let client_data: ClientData = {
        id: id + 1,
        title: req.body.title,
        price: req.body.price,
        size: req.body.size,
        category: req.body.category,
        description: req.body.description,
        image: req.body.image,
        available: req.body.available,
      };
      let newProduct = await new userStore(client_data);
      await newProduct.save();
      res.status(200).json({ status: "succes", dataID: id + 1 });
    } catch (error: any) {
      next(new HandleErr(error.message, 404));
    }
  }
);
export { route_store };
