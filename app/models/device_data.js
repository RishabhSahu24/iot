import { Sequelize, DataTypes } from "sequelize";
import sequelize from "../databases/database";
const Device = require("./devices");

const DeviceData = sequelize.define(
  "device_data",
  {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    device_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: Device,
        key: "id",
      },
    },
    sensor_type: {
      type: DataTypes.STRING(15),
      allowNull: false,
    },
    pin: {
      type: DataTypes.SMALLINT,
      allowNull: false,
    },
    value: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    date: {
      type: DataTypes.DATEONLY,
      allowNull: false,
    },
    hour: {
      type: DataTypes.SMALLINT,
      allowNull: false,
    },
    minutes: {
      type: DataTypes.SMALLINT,
      allowNull: false,
    },
    created_at: {
      type: DataTypes.DATE,
      allowNull: false,
      field: "created_at",
      defaultValue: Sequelize.NOW,
    },
  },
  {
    timestamps: false,
    created_at: false,
    indexes: [
      {
        unique: false,
        fields: ["device_id"],
      },
      {
        unique: false,
        fields: ["device_id", "sensor_type"],
      },
      {
        unique: false,
        fields: ["device_id", "sensor_type", "pin"],
      },
      {
        unique: false,
        fields: ["device_id", "pin"],
      },
      {
        unique: false,
        fields: ["sensor_type"],
      },
      {
        unique: false,
        fields: ["date"],
      },
      {
        unique: false,
        fields: ["date", "hour"],
      },
      {
        unique: false,
        fields: ["date", "hour", "minutes"],
      },
    ],
  }
);

export default DeviceData;
