"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const cors_1 = __importDefault(require("cors"));
const routes_1 = __importDefault(require("./app/routes"));
const globalErrorHandler_1 = require("./app/middleWares/globalErrorHandler");
const notFound_1 = __importDefault(require("./app/middleWares/notFound"));
const cookie_parser_1 = __importDefault(require("cookie-parser"));
const app = (0, express_1.default)();
app.use((0, cors_1.default)({
    origin: [
        "http://localhost:3001",
        "http://localhost:3000",
        "https://techntrovefrontend.vercel.app",
        "https://techntrovefrontend-nt5mvmf2d-mottakinrahats-projects.vercel.app",
        "http://localhost:5000",
        "https://techntrovefrontend-87hvyesjp-mottakinrahats-projects.vercel.app",
        "https://techntrovefrontend-7c9snxmhy-mottakinrahats-projects.vercel.app",
        "https://techntrovefrontend-mottakinrahat-mottakinrahats-projects.vercel.app"
    ],
    credentials: true,
    methods: ["GET", "POST", "PUT", "DELETE", "PATCH", "OPTIONS"],
    allowedHeaders: ["Content-Type", "Authorization", "Cookie"],
}));
app.options("/{*splat}", (0, cors_1.default)());
app.use((0, cookie_parser_1.default)());
app.use(express_1.default.json());
app.use(express_1.default.urlencoded({ extended: true }));
app.get("/", (req, res) => {
    res.send("Hello World!");
});
app.use('/api/v1', routes_1.default);
app.use(globalErrorHandler_1.globalErrorHandler);
app.use(notFound_1.default);
exports.default = app;
