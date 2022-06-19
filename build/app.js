"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.App = void 0;
const express_1 = __importDefault(require("express"));
const cors_1 = __importDefault(require("cors"));
const db_1 = __importDefault(require("./utils/db"));
const router_1 = require("./router");
class App {
    constructor() {
        this.server = (0, express_1.default)();
        this._db = new db_1.default();
        this._db.createConnection();
        this.middleware();
        this.router();
    }
    cors() {
        const options = {
            origin: '*'
        };
        this.server.use((0, cors_1.default)(options));
    }
    middleware() {
        this.cors();
        this.server.use(express_1.default.json());
        this.server.use(express_1.default.urlencoded({ extended: false }));
    }
    router() {
        this.server.use(router_1.router);
    }
}
exports.App = App;
