"use strict";

const initialData = require("../seeders/initialBoardData");

module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert("Boards", initialData, {});
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete("Boards", null, {});
  },
};
