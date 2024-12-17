import { Router } from "express";
import schoolRoutes from "./schoolRoutes";
import studentRoutes from "./studentRoutes";

const router: Router = Router();

router.use("/school", schoolRoutes);
router.use("/student", studentRoutes);

export default router;