import status from "http-status";
import { Request, Response } from "express";

const notFound = (req: Request, res: Response) => {
  res.status(status.NOT_FOUND).json({
    success: false,
    message: "Not Found",
    error: {
      path: req.originalUrl,
      message: "API Not Found"
    },
  });
};

export default notFound;