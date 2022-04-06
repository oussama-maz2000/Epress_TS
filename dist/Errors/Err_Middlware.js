"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function globaleErr(error, req, res, next) {
    error.message = error.message || "something went wrong";
    error.statuscode = error.statuscode || 500;
    res.status(error.statuscode).send(error.message);
}
exports.default = globaleErr;
//# sourceMappingURL=Err_Middlware.js.map