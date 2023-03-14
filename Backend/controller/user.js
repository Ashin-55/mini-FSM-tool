const { logger } = require("../logger/logger");
const CONSTANTS = require("../lib/constants");

// const Sequelize = require("../config/config").sequelize;

const User = require("../models/sqlData/user").User;

const getUsers = async (req, res) => {
  try {
    const users = await User.findAll();
    res.status(CONSTANTS.SUCCESS);
    res.send({
      type: CONSTANTS.SUCCESS,
      data: users,
    });
  } catch (error) {
    const Err = "Error In Getting Users";
    logger.error(`${Err} : ${error}`);
    res.status(CONSTANTS.INTERNAL_ERROR);
    res.send({
      type: CONSTANTS.INTERNAL_SERVER_ERROR,
      title: Err,
      message: error.message,
    });
  }
};

module.exports = {
  getUsers,
};
