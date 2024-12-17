'use strict';
const {
  Model
} = require('sequelize');
const student = require('./student');
module.exports = (sequelize, DataTypes) => {
  class school extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      school.hasMany(student, {
        foreignKey: "schoolId"
      })
    }
  }
  school.init({
    id: DataTypes.STRING,
    schoolName: DataTypes.STRING,
    registrationNo: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'school',
  });
  return school;
};