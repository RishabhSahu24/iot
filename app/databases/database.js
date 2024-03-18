import { Sequelize } from "sequelize";
import config from "./config.js";

const sequelize = new Sequelize({
  host: config.development.host,
  username: config.development.user,
  password: config.development.password,
  database: config.development.database,
  dialect: config.development.dialect,
  dialectModule: require("mysql2"),
  benchmark: true,
});

(async () => {
  try {
    await sequelize.authenticate();
    console.log("Connection has been established successfully.");
    await sequelize.sync({ alter: false });
  } catch (error) {
    console.error("Unable to connect to the database:", error);
  }
})();

export default sequelize;
