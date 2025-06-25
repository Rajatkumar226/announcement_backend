const { DataTypes } = require("sequelize");
const sequelize = require("../database/db");

const announcement = sequelize.define("announcement", {
  title: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  description: {
    type: DataTypes.TEXT,
  },
  richTextDescription: {
    type: DataTypes.TEXT, // or DataTypes.JSON if storing raw content from editors like Quill
  },
  startDate: {
    type: DataTypes.DATE,
    allowNull: true,
  },
  endDate: {
    type: DataTypes.DATE,
    allowNull: true,
  },
});

module.exports = announcement;
