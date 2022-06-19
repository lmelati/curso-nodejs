"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.auth = void 0;
const jsonwebtoken_1 = __importDefault(require("jsonwebtoken"));
const configs_1 = require("./configs");
class Auth {
    validate(req, res, next) {
        const token = req.headers['x-access-token'];
        if (token) {
            try {
                jsonwebtoken_1.default.verify(token, configs_1.config.secret);
                return next();
            }
            catch (error) {
                return res.status(403).send({
                    message: error === null || error === void 0 ? void 0 : error.message
                });
            }
        }
        return res.status(401).send({
            message: 'Unauthorized'
        });
    }
}
exports.auth = new Auth();
