const {Restaurant} = require('./Restaurant')
const {Menu} = require('./Menu')
const {Item} = require("./Item");

Restaurant.hasMany(Menu)
Menu.belongsToMany(Item, {through: 'menu-items'})
Item.belongsToMany(Menu, {through: 'menu-items'})

module.exports = { Restaurant, Menu }
