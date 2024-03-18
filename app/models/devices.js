import { Sequelize, DataTypes } from "sequelize";
import sequelize from "../databases/database";

const devices = sequelize.define(
  "devices",
  {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    mac_id: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true,
    },
    created_at: {
      type: DataTypes.DATE,
      allowNull: false,
      defaultValue: Sequelize.NOW,
      field: "created_at",
    },
  },
  {
    timestamps: false,
  }
);

export default devices;
