import { Request, Response } from "express";
import { handleError, handleSuccess } from "./errorHandler";
import jwt from "jsonwebtoken";
import * as dotenv from "dotenv";

dotenv.config();

const login = async (req: Request, res: Response) => {
  try {
    const { username, password } = req.body;
    const bearerToken: string = await jwt.sign(
      {
        data: password,
      },
      `${process.env.TOKEN_SECRET_KEY}`,
      { expiresIn: "24h" }
    );
    handleSuccess(res, "Login successfully", 200, {
      token: bearerToken,
    });
  } catch (error) {
    handleError(res, 500, error, "Internal server error...");
  }
};

export { login };
