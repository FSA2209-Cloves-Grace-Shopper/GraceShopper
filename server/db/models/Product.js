const Sequelize = require('sequelize')
const db = require('../db')
const axios = require('axios');


const Product = db.define('product', {
  name: {
    type: Sequelize.STRING,
    unique: true,
    allowNull: false
  },
  type: {
    type: Sequelize.STRING,
    allowNull: false
  },
  style: {
    type: Sequelize.STRING
  },
  price: {
    type: Sequelize.DECIMAL(10,2),
    allowNull: false
  },
  description: {
    type: Sequelize.TEXT,
    allowNull: false
  },
  image: {
    type: Sequelize.STRING, 
      validate: {
        isURL: true
      }
  }
})

module.exports = Product


