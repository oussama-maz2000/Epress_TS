import { Request, Response, NextFunction } from "express";

class HandleErr extends Error {
  statuscode: number;
  message: string;
  constructor(message: string, statuscode: number) {
    super(message);
    this.statuscode = statuscode;
    this.message = message;
    //console.log(this.statuscode, this.message);
  }
}
export default HandleErr;
