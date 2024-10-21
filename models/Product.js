const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/database');

class Product extends Model {}

Product.init({
  name: { type: DataTypes.STRING, allowNull: false },
  price: { type: DataTypes.FLOAT, allowNull: false },
  description: { type: DataTypes.TEXT },
  stock: { type: DataTypes.INTEGER, defaultValue: 0 },
}, { sequelize, modelName: 'Product' });

module.exports = Product;
