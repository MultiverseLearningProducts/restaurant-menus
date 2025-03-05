const { Sequelize } = require('sequelize');

// TODO - connect to db via sequelize
const sequelize = new Sequelize({
    dialect: 'sqlite',
    storage: './database.sqlite',
})
module.exports = {
    sequelize
};
