import { Request, Response } from "express";
import SchoolModel from "../model/school";
import StudentModel from "../model/student";
import { Model, ModelStatic } from "sequelize";
import { handleError, handleSuccess } from "./errorHandler";
import { v4 as uuid } from "uuid";

const getAllRecords = (resourceType: string) => {
  return async (req: Request, res: Response) => {
    const _model = getModel(resourceType);
    try {
      const _data = await _model.findAll();
      handleSuccess(res, "Data Fetched...", 200, _data);
    } catch (error) {
      console.log("error: ", error);
      handleError(res, error, "Internal server error...");
    }
  };
};

const getOneRecord = (resourceType: string) => {
  return async (req: Request, res: Response) => {
    const { id } = req.params;
    const _model = getModel(resourceType);
    try {
      const _singleItem = await _model.findOne({
        where: {
          registrationNo: id,
        },
      });
      handleSuccess(res, "Record Found...", 200, _singleItem);
    } catch (error) {
      handleError(res, error, "Internal server error...");
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
      if (!response._options.isNewRecord) {
        return handleSuccess(
          res,
          "Registration number already exist...",
          403,
          response
        );
      } else {
        return handleSuccess(res, "New record created...", 200, response);
      }
      // if (created)
    } catch (error) {
      handleError(res, error, "Internal Server Error...");
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
      // if(_updateRecord[0] == 1) {
      //     const _getNewRecord = await _model.findByPk(id);
      // }
      handleSuccess(res, "Record updated successfully...", 200);
    } catch (error) {
      handleError(res, error, "Internal Server Error...");
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
      handleError(res, error, "Internal Server Error...");
    }
  };
};

const getModel = (modelName: string): ModelStatic<Model> => {
  switch (modelName) {
    case "school":
      return SchoolModel;

    case "student":
      return StudentModel;

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
