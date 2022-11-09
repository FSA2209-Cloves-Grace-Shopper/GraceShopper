const Sequelize = require('sequelize');
const db = require('../db');
const axios = require('axios');

const Order = db.define('order', {
  completed: {
    type: Sequelize.BOOLEAN,
  },
});

module.exports = Order;
