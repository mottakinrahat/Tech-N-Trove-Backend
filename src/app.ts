import express, { Request, Response } from "express";
import cors from "cors";

import router from "./app/routes";
import { globalErrorHandler } from "./app/middleWares/globalErrorHandler";

import notFound from "./app/middleWares/notFound";
import cookieParser from "cookie-parser";


const corsOptions = {
  origin: (origin: string | undefined, callback: (err: Error | null, allow?: boolean) => void) => {
    const allowedOrigins = [
      "http://localhost:3000",
      "http://localhost:3001",
      "http://localhost:5000",
    ];
    // Allow all vercel.app deployments (production + preview)
    const vercelPattern = /^https:\/\/techntrovefrontend.*\.vercel\.app$/;

    if (!origin || allowedOrigins.includes(origin) || vercelPattern.test(origin)) {
      callback(null, true);
    } else {
      callback(new Error(`CORS blocked: ${origin}`));
    }
  },
  credentials: true,
  methods: ["GET", "POST", "PUT", "DELETE", "PATCH", "OPTIONS"],
  allowedHeaders: ["Content-Type", "Authorization", "Cookie"],
};

const app = express();
app.use(cors(corsOptions));
app.options("/{*splat}", cors(corsOptions));
app.use(cookieParser())
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.get("/", (req: Request, res: Response) => {
  res.send("Hello World!");
});

app.use('/api/v1', router)



app.use(globalErrorHandler);
app.use(notFound);
export default app;