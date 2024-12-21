import { Response } from "express";
import { Error } from "sequelize";

const handleError = (
  res: Response,
  statusCode: number,
  error: any,
  message = "Internal Server Error..."
) => {
  // console.log("error: ", error);
  res.status(statusCode).json({
    statusCode,
    message: message,
  });
};

const handleSuccess = (
  res: Response,
  message = "Operation Successfull",
  statusCode: number,
  data?: any
) => {
  let ResponseObject = {
    statusCode: statusCode,
    recordsFetched: data?.length,
    message,
    data,
  };
  res.status(statusCode).send(ResponseObject);
};

export { handleError, handleSuccess };
