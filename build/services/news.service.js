"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.newsService = void 0;
const news_repository_1 = __importDefault(require("../repositories/news.repository"));
class NewsService {
    get() {
        return news_repository_1.default.find({});
    }
    getById(_id) {
        return news_repository_1.default.findById(_id);
    }
    create(news) {
        return news_repository_1.default.create(news);
    }
    update(_id, news) {
        return news_repository_1.default.findByIdAndUpdate(_id, news);
    }
    delete(_id) {
        return news_repository_1.default.findByIdAndRemove(_id);
    }
}
exports.newsService = new NewsService();
