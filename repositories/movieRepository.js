const Movie = require('../models/movie');

exports.findAll = () => {
  return Movie.findAll();
};

exports.findById = (id) => {
  return Movie.findByPk(id);
};

exports.create = (movieData) => {
  return Movie.create(movieData);
};

exports.update = (id, movieData) => {
  return Movie.update(movieData, {
    where: { id }
  });
};

exports.delete = (id) => {
  return Movie.destroy({
    where: { id }
  });
};
