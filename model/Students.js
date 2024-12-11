const { DataTypes, Sequelize } = require("sequelize");
const sequelize = require("../sequelize");

const students = sequelize.define("students", {
    id: {
        type: DataTypes.UUID,
        defaultValue: Sequelize.UUIDV4,
        primaryKey: true,
    },
    first_name: {
        type: DataTypes.STRING,
        allowNull: false
    },
    last_name: {
        type: DataTypes.STRING
    },
    email: {
        type: DataTypes.STRING
    },
    mobile_no: {
        type: DataTypes.DECIMAL(10)
    },
    school_id: {
        type: DataTypes.UUID,
        defaultValue: Sequelize.UUIDV4,
    },
    age: {
        type: DataTypes.INTEGER,
        validate: {
            max: 18
        }
    }
}, {
    freezeTableName: true
});

module.exports = students;