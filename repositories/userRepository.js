const User = require('../models/user');

exports.findAll = () => {
  return User.findAll();
};

exports.findById = (id) => {
  return User.findByPk(id);
};

exports.create = (userData) => {
  return User.create(userData);
};

exports.update = (id, userData) => {
  return User.update(userData, {
    where: { id }
  });
};

exports.delete = (id) => {
  return User.destroy({
    where: { id }
  });
};

