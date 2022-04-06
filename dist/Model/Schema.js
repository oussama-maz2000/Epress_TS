"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.userStore = exports.userModel = void 0;
var mongoose_1 = __importDefault(require("mongoose"));
var schemaUser = new mongoose_1.default.Schema({
    id: {
        type: Number,
        required: true,
        unique: true,
    },
    username: {
        type: String,
        required: true,
        unique: true,
    },
    email: {
        type: String,
        required: true,
    },
    password: {
        type: String,
        required: true,
    },
    confirmpassword: {
        type: String,
        required: true,
    },
});
var schemaStore = new mongoose_1.default.Schema({
    id: { type: Number },
    title: { type: String, unique: true, required: true },
    price: { type: String, required: true },
    size: { type: [String], required: true },
    category: { type: String, required: true },
    description: { type: String },
    image: { type: [String], required: true },
    available: { type: Boolean },
});
exports.userModel = mongoose_1.default.model("users", schemaUser);
exports.userStore = mongoose_1.default.model("stores", schemaStore);
//# sourceMappingURL=Schema.js.map