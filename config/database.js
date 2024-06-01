const { Sequelize } = require('sequelize');

const sequelize = new Sequelize('rakamin', 'danielrowin', 'Chelsea2021', {
  host: 'localhost',
  dialect: 'postgres'
});

module.exports = sequelize;