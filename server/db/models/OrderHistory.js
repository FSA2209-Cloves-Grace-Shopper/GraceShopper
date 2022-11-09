const Sequelize = require('sequelize');
const db = require('../db');
const axios = require('axios');

const OrderHistory = db.define('orderHistory', {
  firstName: {
    type: Sequelize.STRING,
    allowNull: false,
    validate: {
      notEmpty: false,
    },
  },
  lastName: {
    type: Sequelize.STRING,
    allowNull: false,
    validate: {
      notEmpty: false,
    },
  },
  address: {
    type: Sequelize.TEXT,
    allowNull: false,
    validate: {
      notEmpty: false,
    },
  },
  email: {
    type: Sequelize.STRING,
    validate: {
      isEmail: true,
      notEmpty: true,
    },
  },
  orderId: {
    type: Sequelize.INTEGER,
    allowNull: false,
    validate: {
      notEmpty: false,
    },
  },
  userId: {
    type: Sequelize.INTEGER,
  },
});

module.exports = OrderHistory;
