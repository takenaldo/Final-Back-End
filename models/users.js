const Sequelize = require("sequelize");
const db = require("../config/database");
const { v4: uuidv4 } = require("uuid");

("use strict");

const User = db.define("user", {
  id: {
    type: Sequelize.UUID,
    defaultValue: Sequelize.UUIDV4,
    allowNull: false,
    primaryKey: true,
  },
  username: { type: Sequelize.STRING, required: true }, 
  email: { type: Sequelize.STRING, required: true }, 
  password: { type: Sequelize.STRING, required: true }
  
},{
  freezeTableName: true 
});

module.exports = User;
