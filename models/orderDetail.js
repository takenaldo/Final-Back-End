const Sequelize = require("sequelize");
const db = require("../config/database");
const { v4: uuidv4 } = require("uuid");

("use strict");

const OrderDetail = db.define("orderDetail", {
  id: {
    type: Sequelize.UUID,
    defaultValue: Sequelize.UUIDV4,
    allowNull: false,
    primaryKey: true,
  },
  // orderId : {
  //   type: Sequelize.STRING, required: true , 
  //  },
  userId : {
    type: Sequelize.STRING, required: true , 
  },
  productId : {
    type: Sequelize.STRING, required: true , 
   },
  productName : {
  type: Sequelize.STRING, required: true , 
  },
  ingredients : {
    type: Sequelize.STRING, required: true , 
  },
  qty : {
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

});

module.exports = OrderDetail;