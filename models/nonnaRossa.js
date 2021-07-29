const Sequelize = require("sequelize");
const db = require("../config/database");
const { v4: uuidv4 } = require("uuid");

("use strict");

const NonnaRosa = db.define("nonna_rossas", {
  id: {
    type: Sequelize.UUID,
    defaultValue: Sequelize.UUIDV4,
    allowNull: false,
    primaryKey: true,
  },
  productName: { type: Sequelize.STRING, required: false },
  ingredients: { type: Sequelize.STRING, required: false },
  
});

module.exports = NonnaRosa;
