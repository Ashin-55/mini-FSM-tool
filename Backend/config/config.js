const CONSTANTS = require("../lib/constants");
const mongoose = require("mongoose");
const Sequelize = require("sequelize");

const sequelize = new Sequelize(CONSTANTS.mysql.DB, CONSTANTS.mysql.USER, CONSTANTS.mysql.PASSWORD, {
  host: CONSTANTS.mysql.HOST,
  dialect: "mysql",
});

const connectMongoDB = async (mongo_url) => {
  try {
    await mongoose.connect(mongo_url, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
  } catch (error) {
    console.log(`Error in connecting mongodb ${error.message}`);
    process.exit(1);
  }
};
const connectMysql = async () => {
  try {
    let data = await sequelize.authenticate();
    // console.log("mysql database connection succesfull", data);\\
  } catch (error) {
    console.log("unable to connect mysql database", error);
  }
};

module.exports = {
  sequelize: sequelize,
  connectMongoDB: connectMongoDB,
  connectMysql: connectMysql,
};
