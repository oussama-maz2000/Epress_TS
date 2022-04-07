"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.route = void 0;
var express_1 = __importDefault(require("express"));
var validation_1 = require("../Helps/validation");
var cryptPass_1 = require("../Helps/cryptPass");
var Schema_1 = require("../Model/Schema");
var cryptPass_2 = require("../Helps/cryptPass");
exports.route = express_1.default.Router();
exports.route.post("/signup", function (req, res) { return __awaiter(void 0, void 0, void 0, function () {
    var error, hash, new_user, check_email, save_user, err_1;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                _a.trys.push([0, 5, , 6]);
                return [4 /*yield*/, (0, validation_1.signVerification)(req.body)];
            case 1:
                error = (_a.sent()).error;
                if (error)
                    return [2 /*return*/, res.status(401).send(error.details[0].message)];
                return [4 /*yield*/, (0, cryptPass_1.hashing_password)(req.body.password)];
            case 2:
                hash = _a.sent();
                new_user = {
                    id: req.body.id,
                    username: req.body.username,
                    email: req.body.email,
                    password: hash,
                    confirmpassword: req.body.password,
                };
                console.log(new_user.email);
                return [4 /*yield*/, Schema_1.userModel.findOne({ email: req.body.email })];
            case 3:
                check_email = _a.sent();
                if (check_email)
                    return [2 /*return*/, res.status(400).send("email existed before")];
                save_user = new Schema_1.userModel(new_user);
                return [4 /*yield*/, save_user.save()];
            case 4:
                _a.sent();
                res.status(200).send("register ...");
                return [3 /*break*/, 6];
            case 5:
                err_1 = _a.sent();
                res.status(400).json({
                    status: "fail",
                    message: err_1.message,
                });
                return [3 /*break*/, 6];
            case 6: return [2 /*return*/];
        }
    });
}); });
exports.route.post("/login", function (req, res) { return __awaiter(void 0, void 0, void 0, function () {
    var error, user_exist, cmp, err_2;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                _a.trys.push([0, 3, , 4]);
                return [4 /*yield*/, (0, validation_1.loginVerification)(req.body)];
            case 1:
                error = (_a.sent()).error;
                if (error)
                    return [2 /*return*/, res.status(401).send(error.details[0].message)];
                return [4 /*yield*/, Schema_1.userModel.findOne({ email: req.body.email })];
            case 2:
                user_exist = _a.sent();
                if (!user_exist)
                    return [2 /*return*/, res.status(401).send("user not found")];
                cmp = (0, cryptPass_2.compare)(user_exist.password, req.body.password);
                console.log(cmp);
                //if (!cmp) return res.status(401).send("invalid password");
                res.status(200).send("hello world");
                return [3 /*break*/, 4];
            case 3:
                err_2 = _a.sent();
                console.log(err_2.message);
                return [3 /*break*/, 4];
            case 4: return [2 /*return*/];
        }
    });
}); });
//# sourceMappingURL=routersUser.js.map