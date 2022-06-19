"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = __importDefault(require("mongoose"));
const newsSchema = new mongoose_1.default.Schema({
    hat: { type: String },
    title: { type: String },
    text: { type: String },
    author: { type: String },
    image: { type: String },
    publisDate: { type: Date },
    link: { type: String },
    active: { type: Boolean },
});
exports.default = newsSchema;
