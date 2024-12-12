const express = require("express");
const router = express.Router();
const {
  getAllStudents,
  createStudent,
  updateStudent,
  deleteStudent,
} = require("../controllers/studentsController");

router.get("/", getAllStudents);
router.post("/createStudent", createStudent);
router.put("/:id", updateStudent);
router.delete("/:id", deleteStudent);

module.exports = router;