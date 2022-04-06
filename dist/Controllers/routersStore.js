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
exports.route_store = void 0;
var express_1 = __importDefault(require("express"));
var Schema_1 = require("../Model/Schema");
var HandleErr_1 = __importDefault(require("../Errors/HandleErr"));
var route_store = express_1.default.Router();
exports.route_store = route_store;
route_store.get("", function (req, res, next) { return __awaiter(void 0, void 0, void 0, function () {
    var data, error_1;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                _a.trys.push([0, 2, , 3]);
                return [4 /*yield*/, Schema_1.userStore.find()];
            case 1:
                data = _a.sent();
                res.status(200).send(data);
                return [3 /*break*/, 3];
            case 2:
                error_1 = _a.sent();
                next(new HandleErr_1.default(error_1.message, 404));
                return [3 /*break*/, 3];
            case 3: return [2 /*return*/];
        }
    });
}); });
// for shoes
route_store.get("/shoes", function (req, res, next) { return __awaiter(void 0, void 0, void 0, function () {
    var data, error_2;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                _a.trys.push([0, 2, , 3]);
                return [4 /*yield*/, Schema_1.userStore.find({ category: "Shoes" })];
            case 1:
                data = _a.sent();
                res.status(200).send(data);
                return [3 /*break*/, 3];
            case 2:
                error_2 = _a.sent();
                next(new HandleErr_1.default(error_2.message, 404));
                return [3 /*break*/, 3];
            case 3: return [2 /*return*/];
        }
    });
}); });
//for Tshirt
route_store.get("/tshirt", function (req, res, next) { return __awaiter(void 0, void 0, void 0, function () {
    var data, error_3;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                _a.trys.push([0, 2, , 3]);
                return [4 /*yield*/, Schema_1.userStore.find({ category: "T-shirt" })];
            case 1:
                data = _a.sent();
                res.status(200).send(data);
                return [3 /*break*/, 3];
            case 2:
                error_3 = _a.sent();
                next(new HandleErr_1.default(error_3.message, 404));
                return [3 /*break*/, 3];
            case 3: return [2 /*return*/];
        }
    });
}); });
//for Jeans
route_store.get("/jeans", function (req, res, next) { return __awaiter(void 0, void 0, void 0, function () {
    var data, error_4;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                _a.trys.push([0, 2, , 3]);
                return [4 /*yield*/, Schema_1.userStore.find({ category: "Jeans" }).then(function (resolve) {
                        res.status(200).send(resolve);
                    })];
            case 1:
                data = _a.sent();
                return [3 /*break*/, 3];
            case 2:
                error_4 = _a.sent();
                next(new HandleErr_1.default(error_4.message, 404));
                return [3 /*break*/, 3];
            case 3: return [2 /*return*/];
        }
    });
}); });
route_store.get("/sport", function (req, res, next) { return __awaiter(void 0, void 0, void 0, function () {
    var data, error_5;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                _a.trys.push([0, 2, , 3]);
                return [4 /*yield*/, Schema_1.userStore.find({ category: "sport" })];
            case 1:
                data = _a.sent();
                res.status(200).send(data);
                return [3 /*break*/, 3];
            case 2:
                error_5 = _a.sent();
                next(new HandleErr_1.default(error_5.message, 404));
                return [3 /*break*/, 3];
            case 3: return [2 /*return*/];
        }
    });
}); });
route_store.get("/:id", function (req, res, next) { return __awaiter(void 0, void 0, void 0, function () {
    var last_id, id_Product, data, error_6;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                _a.trys.push([0, 5, , 6]);
                return [4 /*yield*/, Schema_1.userStore.findOne().sort({ id: -1 })];
            case 1:
                last_id = _a.sent();
                id_Product = +req.params.id;
                if (!(id_Product > last_id.id)) return [3 /*break*/, 2];
                return [2 /*return*/, next(new HandleErr_1.default("this product doesn't exist", 404))];
            case 2: return [4 /*yield*/, Schema_1.userStore.findOne({ id: id_Product })];
            case 3:
                data = _a.sent();
                res.status(200).send(data);
                _a.label = 4;
            case 4: return [3 /*break*/, 6];
            case 5:
                error_6 = _a.sent();
                next(new HandleErr_1.default("error happend", 404));
                return [3 /*break*/, 6];
            case 6: return [2 /*return*/];
        }
    });
}); });
route_store.post("/insertData", function (req, res, next) { return __awaiter(void 0, void 0, void 0, function () {
    var id, client_data, newProduct, error_7;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                _a.trys.push([0, 4, , 5]);
                return [4 /*yield*/, Schema_1.userStore.findOne().sort({ id: -1 })];
            case 1:
                id = (_a.sent()).id;
                client_data = {
                    id: id + 1,
                    title: req.body.title,
                    price: req.body.price,
                    size: req.body.size,
                    category: req.body.category,
                    description: req.body.description,
                    image: req.body.image,
                    available: req.body.available,
                };
                return [4 /*yield*/, new Schema_1.userStore(client_data)];
            case 2:
                newProduct = _a.sent();
                return [4 /*yield*/, newProduct.save()];
            case 3:
                _a.sent();
                res.status(200).json({ status: "succes", dataID: id + 1 });
                return [3 /*break*/, 5];
            case 4:
                error_7 = _a.sent();
                next(new HandleErr_1.default(error_7.message, 404));
                return [3 /*break*/, 5];
            case 5: return [2 /*return*/];
        }
    });
}); });
//# sourceMappingURL=routersStore.js.map