const { logger } = require("../logger/logger");
const CONSTANTS = require("../lib/constants");

const Customer = require("../models/mongoData/customer").Customer;

const getCustomers = async (req, res) => {
  try {
    const customers = await Customer.find({ is_deleted: false });

    res.status(CONSTANTS.SUCCESS);
    res.send({
      type: CONSTANTS.SUCCESS,
      data: customers,
    });
  } catch (error) {
    const Error = "Error In Geting Customers";
    logger.error(`${Error} : ${error}`);
    res.status(CONSTANTS.INTERNAL_ERROR);
    res.send({
      type: CONSTANTS.ERROR_MSG,
      title: Error,
      message: error.message,
    });
  }
};
module.exports = { getCustomers };
