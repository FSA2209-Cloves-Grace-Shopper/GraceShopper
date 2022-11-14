const Sequelize = require('sequelize');
const db = require('../db');
const axios = require('axios');

const OrderProduct = db.define('orderProduct', {
  quantity: {
    type: Sequelize.INTEGER,
  },
  unitPrice: {
    type: Sequelize.DECIMAL(10, 2),
    allowNull: false,
  },
  // productSubtotal
  productSubtotal: {
    type: Sequelize.DECIMAL(10, 2),
    allowNull: false,
  },
});

module.exports = OrderProduct;
