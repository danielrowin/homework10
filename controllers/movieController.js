const MovieRepository = require('../repositories/movieRepository');

exports.getAllMovies = async (req, res) => {
  try {
    const movies = await MovieRepository.findAll();
    res.json(movies);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

exports.getMovieById = async (req, res) => {
  try {
    const movie = await MovieRepository.findById(req.params.id);
    if (movie) {
      res.json(movie);
    } else {
      res.status(404).json({ error: 'Movie not found' });
    }
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

exports.createMovie = async (req, res) => {
  try {
    const newMovie = await MovieRepository.create(req.body);
    res.status(201).json(newMovie);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

exports.updateMovie = async (req, res) => {
  try {
    const updatedMovie = await MovieRepository.update(req.params.id, req.body);
    if (updatedMovie) {
      res.json(updatedMovie);
    } else {
      res.status(404).json({ error: 'Movie not found' });
    }
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

exports.deleteMovie = async (req, res) => {
  try {
    const deleted = await MovieRepository.delete(req.params.id);
    if (deleted) {
      res.json({ message: 'Movie deleted' });
    } else {
      res.status(404).json({ error: 'Movie not found' });
    }
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};
