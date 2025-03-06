const {sequelize} = require('../db');
const { Model, DataTypes} = require('sequelize');

class Item extends Model {}

Item.init({
        name: DataTypes.STRING,
        image: DataTypes.STRING,
        price: DataTypes.INTEGER,
        vegetarian: DataTypes.BOOLEAN
    },
    {
        sequelize,
        modelName: 'Item',
    })
module.exports = {Item};