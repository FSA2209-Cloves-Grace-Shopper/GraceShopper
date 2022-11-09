const Sequelize = require('sequelize');
const db = require('../db');
const axios = require('axios');

const Product = db.define('product', {
  name: {
    type: Sequelize.STRING,
    unique: true,
    allowNull: false,
  },
  type: {
    type: Sequelize.STRING,
    allowNull: false,
    validate: {
      notEmpty: true,
    },
  },
  style: {
    type: Sequelize.STRING,
  },
  price: {
    type: Sequelize.DECIMAL(10, 2),
    allowNull: false,
    defaultValue: 0.0,
  },
  quantity: {
    type: Sequelize.INTEGER,
    allowNull: false,
    defaultValue: 0,
  },
  description: {
    type: Sequelize.TEXT,
    allowNull: false,
    validate: {
      notEmpty: true,
    },
  },
  imageUrl: {
    type: Sequelize.STRING,
    validate: {
      isURL: true,
    },
  },
});

module.exports = Product;
