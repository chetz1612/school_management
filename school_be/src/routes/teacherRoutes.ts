import express from "express";
import {
  createRecord,
  deleteRecord,
  getAllRecords,
  getOneRecord,
  updateRecord,
} from "../controllers/crud";

const router = express.Router();
const resourceType: string = "teacher";

router.get("/", getAllRecords(resourceType));
router.get("/:id", getOneRecord(resourceType));
router.post("/", createRecord(resourceType));
router.put("/:id", updateRecord(resourceType));
router.delete("/:id", deleteRecord(resourceType));

export default router;