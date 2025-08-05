"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const userRoutes_1 = __importDefault(require("./routes/userRoutes"));
const body_parser_1 = __importDefault(require("body-parser"));
const app = (0, express_1.default)();
// Replace app.use(express.json()) with:
app.use(body_parser_1.default.json());
// Routes
app.use('/users', userRoutes_1.default);
exports.default = app;
//# sourceMappingURL=app.js.map