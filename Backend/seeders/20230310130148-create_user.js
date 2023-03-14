"use strict";

/** @type {import('sequelize-cli').Migration} */

const { User } = require("../models/sqlData/user");
module.exports = {
  async up() {
    await User.create({
      company_id: 1,
      role_id: 1,
      user_name: "test_user_1",
      user_description: "test_user_1_des",
      password:"1234"
    });
    await User.create({
      company_id: 1,
      role_id: 2,
      user_name: "test_admin_1",
      user_description: "test_admin_1_des",
      password:"1234"
    });
  },

  async down(queryInterface, Sequelize) {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
  },
};
