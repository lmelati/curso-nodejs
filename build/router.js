"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.router = void 0;
const express_1 = require("express");
const news_controller_1 = require("./controllers/news.controller");
const router = (0, express_1.Router)();
exports.router = router;
// Routes
router.get('/', (req, res) => res.send({ status: 'ok' }));
router.get('/api/news', news_controller_1.newsController.get);
router.get('/api/news/:id', news_controller_1.newsController.getById);
router.post('/api/news', news_controller_1.newsController.create);
router.put('/api/news/:id', news_controller_1.newsController.update);
router.delete('/api/news/:id', news_controller_1.newsController.delete);
