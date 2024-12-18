import express, { NextFunction, Request, Response } from "express";
import { handleError } from "../controllers/errorHandler";
import jwt, { JwtPayload } from "jsonwebtoken";

interface ExtendedRequest extends Request {
  verified: string | JwtPayload;
}

export const authMiddleware: any = (
  req: ExtendedRequest,
  res: Response,
  next: NextFunction
) => {
  try {
    if (req.url !== "/login" && typeof req.headers["authorization"] !== null) {
      const token: string | null | undefined= req.headers["authorization"];
      if (!token || token == "") {
        return res.status(401).json({
          message: "Access denied. No token provided...",
        });
      }
      if(typeof token == "string") {
        const actualToken: string = token.startsWith("Bearer ")
          ? token.split(" ")[1]
          : token;
        const verified: JwtPayload | string = jwt.verify(
          actualToken,
          `${process.env.TOKEN_SECRET_KEY}`
        );
        req.verified = verified;
      }
    }
    next();
  } catch (error) {
    handleError(res, error, "Internal Server Error");
  }
};
