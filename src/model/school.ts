import { DataTypes } from "sequelize";
import { sequelize } from "../database/db";
import { School } from "../interfaces/modelIterface";
import { ModelCtor } from "sequelize-typescript";
import StudentModel from "./student";

const SchoolModel = sequelize.define<School>("school", {
  id: {
    primaryKey: true,
    type: DataTypes.UUID,
  },
  schoolName: {
    type: DataTypes.STRING,
  },
  registrationNo: {
    type: DataTypes.STRING,
    allowNull: false,
    unique: true,
    primaryKey: true,
  },
});

SchoolModel.hasMany(StudentModel, {
  sourceKey: "id",
  foreignKey: "schoolId",
});

export default SchoolModel;
