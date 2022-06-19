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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.newsController = void 0;
const http_status_1 = __importDefault(require("http-status"));
const news_service_1 = require("../services/news.service");
const helper_1 = __importDefault(require("../utils/helper"));
class NewsController {
    get(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const news = yield news_service_1.newsService.get();
                helper_1.default.sendResponse(res, http_status_1.default.OK, news);
            }
            catch (error) {
                console.error.bind(console, `Error: ${error}`);
            }
        });
    }
    getById(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const _id = req.params.id;
            try {
                const news = yield news_service_1.newsService.getById(_id);
                helper_1.default.sendResponse(res, http_status_1.default.OK, news);
            }
            catch (error) {
                console.error.bind(console, `Error: ${error}`);
            }
        });
    }
    create(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const vm = req.body;
            try {
                yield news_service_1.newsService.create(vm);
                helper_1.default.sendResponse(res, http_status_1.default.OK, "Notícia cadastrada com sucesso");
            }
            catch (error) {
                console.error.bind(console, `Error: ${error}`);
            }
        });
    }
    update(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const _id = req.params.id;
            const vm = req.body;
            try {
                yield news_service_1.newsService.update(_id, vm);
                helper_1.default.sendResponse(res, http_status_1.default.OK, "Notícia atualizada com sucesso");
            }
            catch (error) {
                console.error.bind(console, `Error: ${error}`);
            }
        });
    }
    delete(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const _id = req.params.id;
            try {
                yield news_service_1.newsService.delete(_id);
                helper_1.default.sendResponse(res, http_status_1.default.OK, 'Notícia removida com sucesso');
            }
            catch (error) {
                console.error.bind(console, `Error: ${error}`);
            }
        });
    }
}
exports.newsController = new NewsController();
