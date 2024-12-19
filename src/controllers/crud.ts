import { Request, Response } from "express";
import { School } from "../model/school";
import { Model, ModelStatic } from "sequelize";
import { handleError, handleSuccess } from "./errorHandler";
import { v4 as uuid } from "uuid";
import Subject from "../model/subject";
import Student from "../model/student";
import { Teacher } from "../model/teacher";

const getAllRecords = (resourceType: string) => {
  return async (req: Request, res: Response) => {
    const _model = getModel(resourceType);
    try {
      const _data = await _model.findAll();
      handleSuccess(res, "Data Fetched...", 200, _data);
    } catch (error) {
      console.log("error: ", error);
      handleError(res, 500, error, "Internal server error...");
    }
  };
};

const getOneRecord = (resourceType: string) => {
  return async (req: Request, res: Response) => {
    const { id } = req.params;
    const _model = getModel(resourceType);
    try {
      const _singleItem = await _model.findByPk(id);
      handleSuccess(res, "Record Found...", 200, _singleItem);
    } catch (error: any) {
      handleError(res, 400, error, error.message);
    }
  };
};

const createRecord = (resourceType: string) => {
  return async (req: Request, res: Response) => {
    const { registrationNo, id } = req.body;
    const _model = getModel(resourceType);
    try {
      let response: any;
      if ("registrationNo" in req.body) {
        response = await _model.findOrCreate({
          where: {
            registrationNo: registrationNo,
          },
          defaults: {
            id: uuid(),
            ...req.body,
          },
        });
      } else {
        response = await _model.create({
          id: uuid(),
          ...req.body,
        });
      }
      let isNewRecord: boolean = response._options.isNewRecord;
      if (!isNewRecord) {
        return handleSuccess(
          res,
          "Registration number already exist...",
          403,
          response[0]
        );
      } else {
        return handleSuccess(
          res,
          "New record created...",
          200,
          response.dataValues
        );
      }
    } catch (error: any) {
      if (error.name === "SequelizeUniqueConstraintError") {
        handleError(res, 400, error, "Subject name must be unique.");
      } else {
        handleError(res, 500, error, "Internal Server Error...");
      }
    }
  };
};

const updateRecord = (resourceType: string) => {
  return async (req: Request, res: Response): Promise<void> => {
    try {
      const _model = getModel(resourceType);
      const { id } = req.params;
      const _updateRecord = await _model.update(req.body, {
        where: {
          id: id,
        },
      });
      if (_updateRecord[0] == 1) {
        handleSuccess(res, "Record updated successfully...", 200);
      }
    } catch (error) {
      handleError(res, 500, error, "Internal Server Error...");
    }
  };
};

const deleteRecord = (resourceType: string) => {
  return async (req: Request, res: Response) => {
    const { id } = req.params;
    try {
      const _model = getModel(resourceType);
      await _model.destroy({
        where: {
          id: id,
        },
      });
      handleSuccess(res, "Record deleted successfully...", 200);
    } catch (error) {
      handleError(res, 500, error, "Internal Server Error...");
    }
  };
};

const getModel = (modelName: string): ModelStatic<Model> => {
  switch (modelName) {
    case "school":
      return School;

    case "student":
      return Student;

    case "subject":
      return Subject;

    case "teacher":
      return Teacher;

    default:
      throw new Error("Model not found...");
  }
};

export {
  getAllRecords,
  getOneRecord,
  createRecord,
  updateRecord,
  deleteRecord,
};
