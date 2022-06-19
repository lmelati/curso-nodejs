"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const app_1 = require("./app");
const constants_1 = require("./constants");
new app_1.App().server.listen(constants_1.PORT, () => console.log(`Server started at port: ${constants_1.PORT}`));
