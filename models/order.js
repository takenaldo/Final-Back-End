const Sequelize = require("sequelize");
const db = require("../config/database");
const { v4: uuidv4 } = require("uuid");

("use strict");

const Order = db.define("order", {
  id: {
    type: Sequelize.UUID,
    defaultValue: Sequelize.UUIDV4,
    allowNull: false,
    primaryKey: true,
  },
  userId : {
   type: Sequelize.STRING, required: true , 
  },
  restaurantName : {
    type: Sequelize.STRING, required: true , 
  },
  readyToCollect : {
    type: Sequelize.STRING, required: true , 
  },
  orderCode: {
    type: Sequelize.STRING, required: true , 
  }
},{
    freezeTableName: true 
});

module.exports = Order;