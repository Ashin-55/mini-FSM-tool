const { Umzug, SequelizeStorage } = require("umzug");
const path = require("path");
const { Sequelize } = require("sequelize");

const CONSTANTS = require("./lib/constants");

const sequelize = new Sequelize(CONSTANTS.mysql.DB, CONSTANTS.mysql.USER, CONSTANTS.mysql.PASSWORD, {
  host: CONSTANTS.mysql.HOST,
  dialect: "mysql",
  logging: false,
});
const umzug = new Umzug({
  migrations: { glob: "seeders/*.js" },
  storage: new SequelizeStorage({ sequelize }),
  logger: console,
  context: sequelize.getQueryInterface(),
  storageOptions: {
    sequelize: sequelize,
  },
});

(async () => {
  let pending = await umzug.pending();
  console.log("pending",pending);
  await umzug.up();
  console.log("All data seeded successfully");
  process.exit();
})();
