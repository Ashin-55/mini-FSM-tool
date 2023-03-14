const { logger } = require("../logger/logger");
const CONSTANTS = require("../lib/constants");
const Job = require("../models/mongoData/job").Job;

const getJobs = async (req, res) => {
  try {
    const jobs = await Job.find();
    res.status(CONSTANTS.SUCCESS);
    res.send({
      type: CONSTANTS.SUCCESS,
      data: jobs,
    });
  } catch (error) {
    const Err = "Error In Getting Jobs";
    logger.error(`${Err} : ${error}`);
    res.status(CONSTANTS.INTERNAL_ERROR);
    res.send({
      type: CONSTANTS.INTERNAL_ERROR,
      title: Err,
      message: error.message,
    });
  }
};
module.exports = {
  getJobs,
};
