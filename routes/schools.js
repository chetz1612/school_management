const express = require("express");
const router = express.Router();
const {
  getAllSchools,
  createSchool,
  updateSchool,
  deleteSchool,
} = require("../controllers/schoolsController");
const { getAll } = require("../controllers/crud");

router.get("/", getAllSchools);
router.post("/createSchool", createSchool);
router.put("/:id", updateSchool);
router.delete("/:id", deleteSchool);

module.exports = router;