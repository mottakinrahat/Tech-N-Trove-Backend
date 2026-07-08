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
const corsOptions = {
    origin: (origin, callback) => {
        const allowedOrigins = [
            "http://localhost:3000",
            "http://localhost:3001",
            "http://localhost:5000",
        ];
        // Allow all vercel.app deployments (production + preview)
        const vercelPattern = /^https:\/\/techntrovefrontend.*\.vercel\.app$/;
        if (!origin || allowedOrigins.includes(origin) || vercelPattern.test(origin)) {
            callback(null, true);
        }
        else {
            callback(new Error(`CORS blocked: ${origin}`));
        }
    },
    credentials: true,
    methods: ["GET", "POST", "PUT", "DELETE", "PATCH", "OPTIONS"],
    allowedHeaders: ["Content-Type", "Authorization", "Cookie"],
};
const app = (0, express_1.default)();
app.use((0, cors_1.default)(corsOptions));
app.options("/{*splat}", (0, cors_1.default)(corsOptions));
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
