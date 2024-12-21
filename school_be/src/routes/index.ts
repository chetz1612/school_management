import { Router } from "express";
import schoolRoutes from "./schoolRoutes";
import studentRoutes from "./studentRoutes";
import subjectRoutes from "./subjectRoutes";
import teacherRoutes from "./teacherRoutes";
import authRoutes from "./authRoutes";

const router: Router = Router();

router.use("/login", authRoutes);
router.use("/school", schoolRoutes);
router.use("/student", studentRoutes);
router.use("/subject", subjectRoutes);
router.use("/teacher", teacherRoutes);

export default router;