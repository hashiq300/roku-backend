const express = require("express");
const router = express.Router();
const {
  getMovies,
  getMovieGenre,
  getSingleMovieDetail,
  searchMovie,
  animatedMovies
} = require("../controller/movieController");

// get movies by gener
router.get("/movie-genre/:genreId", getMovies);

// get all genres of movies
router.get("/get-genres", getMovieGenre);

// get single movie details by movie id
router.get("/single-movie/:movieId",getSingleMovieDetail)

// search for a movie
router.get("/search/:query",searchMovie)

// animated movies 
router.get("/animated",animatedMovies)


module.exports = router;
