const { sequelize } = require("../../config/config");
const Sequelize = require("sequelize");

const User = sequelize.define(
  "users",
  {
    user_id: { type: Sequelize.INTEGER, autoIncrement: true, primaryKey: true },
    company_id: { type: Sequelize.INTEGER, allowNull: false },
    role_id: { type: Sequelize.INTEGER },
    user_name: { type: Sequelize.STRING, require: true },
    user_description: { type: Sequelize.STRING },
    password: { type: Sequelize.STRING, allowNull: false },
  },
  { timestamps: true, createdAt: "created_at", updatedAt: "updated_at" }
);
User.sync();

module.exports = {
  User: User,
};
