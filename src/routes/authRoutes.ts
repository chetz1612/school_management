import { Router } from "express";
import dotenv from "dotenv";
import { login } from "../controllers/authController";

dotenv.config();
const router: Router = Router();

router.post("/", login);

export default router;
