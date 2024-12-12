
const { _getAll, _create, _update, _delete } = require("./crud");

async function getAllSchools(req, res) {
  await _getAll(req, res, 'school')
}

async function createSchool(req, res) {
  await _create(req, res, 'school');
}

async function updateSchool(req, res) {
  await _update(req, res, 'school');
}

async function deleteSchool(req, res) {
  await _delete(req, res, 'school');
}

module.exports = {
  getAllSchools,
  createSchool,
  updateSchool,
  deleteSchool,
};
