import express, { Request, Response } from "express";
import cors from "cors";

import router from "./app/routes";
import { globalErrorHandler } from "./app/middleWares/globalErrorHandler";

import notFound from "./app/middleWares/notFound";
import cookieParser from "cookie-parser";


const app = express();
app.use(
  cors({
    origin: [
      "http://localhost:3001",
      "http://localhost:3000",
      "https://techntrovefrontend.vercel.app",
      "https://techntrovefrontend-nt5mvmf2d-mottakinrahats-projects.vercel.app",
      "http://localhost:5000",
      "https://techntrovefrontend-87hvyesjp-mottakinrahats-projects.vercel.app",
      "https://techntrovefrontend-7c9snxmhy-mottakinrahats-projects.vercel.app"
    ],
    credentials: true,
    methods: ["GET", "POST", "PUT", "DELETE", "PATCH", "OPTIONS"],
    allowedHeaders: ["Content-Type", "Authorization", "Cookie"],
  })
);
app.options("/{*splat}", cors());
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