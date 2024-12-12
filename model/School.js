const { DataTypes } = require("sequelize");
const sequelize = require("../sequelize");

const school = sequelize.define("school", {
  id: {
    type: DataTypes.UUID,
    primaryKey: true,
    allowNull: false
  },
  school_name: {
    type: DataTypes.STRING
  },
  registration_no: {
    type: DataTypes.STRING,
    primaryKey: true,
    allowNull: false,
    unique: true
  }
}, {
    freezeTableName: true
});

module.exports = school;