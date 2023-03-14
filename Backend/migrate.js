const CONSTANTS = require("./lib/constants");

const Sequelize = require("sequelize");
const path = require("path");
const { Umzug, SequelizeStorage } = require("umzug");

let sequelize;

if (CONSTANTS.ENV === "STAGING") {
  sequelize = new Sequelize(CONSTANTS.mysql.DB, CONSTANTS.mysql.USER, CONSTANTS.mysql.PASSWORD, {
    host: CONSTANTS.mysql.HOST,
    dialect: "mysql",
    logging: false,
  });
}

const umzug = new Umzug({
  migrations: { glob: "migrations/*.js" },
  context: sequelize.getQueryInterface(),
  storage: new SequelizeStorage({ sequelize }),
  logger: console,
});




(async () => {
  const migrations = await umzug.pending();
  console.log("pending ",migrations)
  await umzug.up();
  console.log("all migrations done successfully");
  process.exit();
})();
