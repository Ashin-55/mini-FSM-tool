const logger = require("./logger/logger");
const CONSTANTS = require("./lib/constants");

const Customer = require("./controller/customer");
const User = require("./controller/user");
const Job = require("./controller/job");
module.exports = function (server) {
  server.get("/", (req, res) => {
    res.status(CONSTANTS.SUCCESS);
    res.send("server is up and running");
  });

  /*customer*/
  server.get("/customer", Customer.getCustomers);

  /*user*/
  server.get("/users", User.getUsers);

  /*jobs*/
  server.get("/jobs", Job.getJobs);
};
