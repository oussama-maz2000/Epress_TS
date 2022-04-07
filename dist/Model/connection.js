"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.connect = void 0;
var mongoose_1 = __importDefault(require("mongoose"));
var dotenv_1 = __importDefault(require("dotenv"));
dotenv_1.default.config();
var URL = process.env.DATABASE_URL;
function connect() {
    var DB = {
        useNewUrlParser: true,
        useUnifiedTopology: true,
    };
    try {
        var client = mongoose_1.default.connect(URL, DB);
        console.log("database connected ...");
    }
    catch (err) {
        console.log(err.message);
    }
}
exports.connect = connect;
//# sourceMappingURL=connection.js.map