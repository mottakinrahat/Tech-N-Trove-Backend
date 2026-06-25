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
      "https://tech-n-trove-backend-production.up.railway.app",
      "http://localhost:3001",
      "http://localhost:3000",
      "https://techntrovefrontend.vercel.app",
      "https://techntrovefrontend-nt5mvmf2d-mottakinrahats-projects.vercel.app",
      "http://localhost:5000"
    ],
    credentials: true,
  })
);
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