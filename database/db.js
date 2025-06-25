// database/index.js
const { Sequelize } = require("sequelize");

const sequelize = new Sequelize("announcements_db", "root", "", {
  host: "localhost",
  dialect: "mysql",
});

module.exports = sequelize;
