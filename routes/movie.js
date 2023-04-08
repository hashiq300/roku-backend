const express = require("express");
const router = express.Router();
const {
  getMovies,
  getMovieGenre,
  getSingleMovieDetail,
} = require("../controller/movieController");

// get movies by gener
router.get("/movie-genre/:genreId", getMovies);

// get all genres of movies
router.get("/get-genres", getMovieGenre);

// get single movie details by movie id
router.get("/single-movie/:movieId",getSingleMovieDetail)

// get trending 





module.exports = router;
