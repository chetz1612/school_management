import { Router } from "express";
import schoolRoutes from "./schoolRoutes";
import studentRoutes from "./studentRoutes";
import authRoutes from "./authRoutes";

const router: Router = Router();

router.use("/login", authRoutes);
router.use("/school", schoolRoutes);
router.use("/student", studentRoutes);

export default router;