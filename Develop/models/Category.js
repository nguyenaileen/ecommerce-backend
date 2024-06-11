const { Model, DataTypes } = require('sequelize');

const sequelize = require('../config/connection.js');

class Category extends Model {}

//create columns
Category.init(
  {
    id:{
      type: DataTypes.Integer, 
      allowNull: false, 
      primaryKey: true, 
      autoIncrement: true, 
    }

   category _name:{
    type:DataTypes.string,
    allowNull: false, 
   }
  },
  {
    sequelize,
    timestamps: false,
    freezeTableName: true,
    underscored: true,
    modelName: 'category',
  }
);

module.exports = Category;
