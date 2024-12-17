'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.createTable('school', {
      id: {
        type: Sequelize.UUID,
        primaryKey: true,
        autoIncrement: false,
        allowNull: false
      },
      schoolName: {
        type: Sequelize.STRING,
        allowNull: false
      },
      registrationNo: {
        type: Sequelize.STRING,
        allowNull: false,
        unique: true
      }
    })
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.dropTable('school');
  }
};
