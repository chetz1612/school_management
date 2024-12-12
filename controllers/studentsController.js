const { _create, _getAll, _update, _delete } = require("./crud");

async function getAllStudents(req, res) {
  await _getAll(req, res, "student");
}

async function createStudent(req, res) {
  await _create(req, res, "student");
}

async function updateStudent(req, res) {
  await _update(req, res, "student");
}

async function deleteStudent(req, res) {
  await _delete(req, res, "student");
}

module.exports = {
  getAllStudents,
  createStudent,
  updateStudent,
  deleteStudent,
};