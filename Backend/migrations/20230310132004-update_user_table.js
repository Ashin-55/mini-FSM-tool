"use strict";
const Sequelize = require("sequelize");
/** @type {import('sequelize-cli').Migration} */

module.exports = {
  up: async ({ context: queryInterface }) => {
    await queryInterface.addColumn('users', 'password', {
      type: Sequelize.STRING,
      allowNull: false
    },{});
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.removeColumn('users', 'password');
  }
};