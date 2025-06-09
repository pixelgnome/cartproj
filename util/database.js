const Sequelize = require("sequelize");

const sequelize = new Sequelize('node-complete', 'root', 'turiddu!', {
  dialect: 'mysql',
  host: 'localhost'
});

module.exports = sequelize;
