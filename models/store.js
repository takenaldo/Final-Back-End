const Sequelize = require("sequelize");
const db = require("../config/database");
const { v4: uuidv4 } = require("uuid");

("use strict");

const Store = db.define("store", {
  id: {
    type: Sequelize.UUID,
    defaultValue: Sequelize.UUIDV4,
    allowNull: false,
    primaryKey: true,
  },
  name: { type: Sequelize.STRING, required: false },
  logo: { type: Sequelize.STRING, required: false },
  unit: { type: Sequelize.STRING, required: false },
  building: { type: Sequelize.STRING, required: false },
  street: { type: Sequelize.STRING, required: false },
  city: { type: Sequelize.STRING, required: false },
  region: { type: Sequelize.STRING, required: false },
  country: { type: Sequelize.STRING, required: false },
  postalCode: { type: Sequelize.STRING, required: false },
  latitude: { type: Sequelize.STRING, required: false },
  longitude: { type: Sequelize.STRING, required: false },
  openHours: { type: Sequelize.STRING, required: false },
  closeHours: { type: Sequelize.STRING, required: false },
});

module.exports = Store;
