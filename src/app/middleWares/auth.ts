
import { Secret } from "jsonwebtoken";
import { verifyToken } from "../../helpers/jwtHelpers";

import { NextFunction, Request, Response } from "express";
import config from "../../config";

export const auth = (...roles: string[]) => {
  return async (
    req: Request & { user?: any },
    res: Response,
    next: NextFunction
  ) => {
    try {

      const authHeader = req.headers.authorization;
      if (!authHeader) {
        throw new Error("You are not authorized");
      }

      const token = authHeader.startsWith("Bearer ")
        ? authHeader.slice(7)
        : authHeader;

      const verifiedUser = await verifyToken(token, config.jwt.jwt_secret as Secret);
      req.user = verifiedUser;
      if (roles.length && !roles.includes(verifiedUser.role)) {
        throw new Error("You are not authorized for this role");
      }
      next();
    } catch (error) {
      next(error);
    }
  };
};