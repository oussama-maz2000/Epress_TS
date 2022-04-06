import { Request, Response, NextFunction } from "express";
import HandleErr from "./HandleErr";
declare function globaleErr(error: HandleErr, req: Request, res: Response, next: NextFunction): void;
export default globaleErr;
//# sourceMappingURL=Err_Middlware.d.ts.map