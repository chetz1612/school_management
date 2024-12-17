import { DataTypes } from "sequelize";
import { sequelize } from "../database/db";
import { Student } from "../interfaces/modelIterface";

const StudentModel = sequelize.define<Student>("student", {
  id: {
    primaryKey: true,
    type: DataTypes.UUID,
  },
  firstName: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  lastName: {
    type: DataTypes.STRING,
  },
  email: {
    type: DataTypes.STRING,
  },
  mobileNo: {
    type: DataTypes.BIGINT,
    validate: {
      customValidator(value: number) {
        if (value.toString().length > 10)
          throw new Error("Mobile number length should be 10");
      },
    },
  },
  age: {
    type: DataTypes.INTEGER,
    validate: {
      customValidator(value: number) {
        if (value.toString().length > 18)
          throw new Error("Age should be less than 18 years");
      },
    },
  },
});

export default StudentModel;
