"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = __importDefault(require("express"));
var dotenv_1 = __importDefault(require("dotenv"));
var connection_1 = require("./Model/connection");
var routersStore_1 = require("./Controllers/routersStore");
var Err_Middlware_1 = __importDefault(require("./Errors/Err_Middlware"));
var app = (0, express_1.default)();
app.use(express_1.default.json());
dotenv_1.default.config();
(0, connection_1.connect)();
//app.set("view engine", "hbs");
app.use("/store", routersStore_1.route_store);
app.use(Err_Middlware_1.default);
app.get("", function (req, res, next) {
    res.status(200).send("welcome ");
});
app.listen(3001, function () {
    console.log("server started on port 3001");
});
//# sourceMappingURL=app.js.map