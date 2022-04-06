import { Request, Response, NextFunction } from "express";
import HandleErr from "./HandleErr";
function globaleErr(
  error: HandleErr,
  req: Request,
  res: Response,
  next: NextFunction
) {
    error.message = error.message || "something went wrong";
    error.statuscode = error.statuscode || 500;
  res.status(error.statuscode).send( error.message);
  
}

export default globaleErr;
