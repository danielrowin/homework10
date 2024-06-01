const sequelize = require('../config/database');
const Movie = require('./movie');
const User = require('./user');

const models = {
  Movie,
  User,
};

Object.keys(models).forEach(key => {
  if ('associate' in models[key]) {
    models[key].associate(models);
  }
});

models.sequelize = sequelize;
models.Sequelize = Sequelize;

module.exports = models;
