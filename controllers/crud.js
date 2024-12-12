const { v4: uuidv4 } = require("uuid");
const school = require("../model/School");
const students = require("../model/Students");
const { handleError, handleSuccess } = require("../utils/responseHandlers");

async function _getAll(req, res, value) {
  const _model = getModel(value);
  try {
    const _allData = await _model.findAll();
    handleSuccess(res, _allData, "Data fetched...");
  } catch (error) {
    handleError(res, error, "Internal Server Error...");
  }
}

async function _create(req, res, value) {
  const _model = getModel(value);
  try {
    const _createRecord = await _model.create({
      id: uuidv4(),
      ...req.body,
    });
    handleSuccess(res, _createRecord, "Record created successfully...");
  } catch (error) {
    handleError(res, error, "Error while creating record...");
  }
}

async function _update(req, res, value) {
  const _model = getModel(value);
  try {
    const { id } = req.params;
    const _updateRecord = await _model.update(req.body, {
      where: {
        id: id,
      },
    });
    handleSuccess(res, _updateRecord, "Record updated successfully...");
  } catch (error) {
    handleError(res, error, "Error updating record...");
  }
}

async function _delete(req, res, value) {
  const _model = getModel(value);
  try {
    const { id } = req.params;
    const _delteRecord = await _model.destroy({
      where: {
        id: id,
      },
    });
    if (_delteRecord > 0) {
      res.status(200).send("Record deleted successfully...");
    } else {
      res.status(
        `Record is not deleted, it might not exist or condition didn't match`
      );
    }
  } catch (error) {
    handleError(res, error, "Error while deleting record...");
  }
}

function getModel(modelName) {
  return modelName == "school" ? school : students;
}

module.exports = {
  _getAll,
  _create,
  _update,
  _delete
};
