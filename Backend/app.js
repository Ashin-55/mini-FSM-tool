const express = require("express");
const connectMysql = require("./config/config").connectMysql;
const connectMongoDB = require("./config/config").connectMongoDB;
const app = express();
const CONSTANTS = require("./lib/constants");

/* connecting mongodb*/
connectMongoDB(CONSTANTS.mongo_url);

/* connecting mysql*/
connectMysql();

app.use((req, res, next) => {
  next();
});


try {
  require("./urls")(app)
} catch (error) {
console.log("error",error)
}

app.listen(CONSTANTS.port, () => {
  console.info(`server is and runing on port ${CONSTANTS.port}`);
});
