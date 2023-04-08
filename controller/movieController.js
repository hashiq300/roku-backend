const fetch = require("cross-fetch");
const { BASE_URL, API_KEY } = require("../constants");
const { ACTION, MOVIE_GENRE } = require("../urls");

const getMovies = async (req, res) => {
  const { genreId } = req.params;
  const url = `${BASE_URL}/discover/movie?api_key=${API_KEY}&with_genres=${genreId}`;
  const moviesData = await getData(url);
  res.status(200).json(moviesData);
};

const getMovieGenre = async (req, res) => {
  const movieGenre = await getData(MOVIE_GENRE);
  res.status(200).json(movieGenre);
};

const getSingleMovieDetail = async (req, res) => {
  const { movieId } = req.params;
  var url = `${BASE_URL}/movie/${movieId}?api_key=${API_KEY}&language=en-US`;
  var singleMovieData = await getData(url);
  singleMovieData = singleMovieData.data;

  url = `${BASE_URL}/movie/${movieId}/videos?api_key=${API_KEY}&language=en-US`;
  var movieVideos = await getData(url);
  movieVideos = movieVideos.data.results;

  url = `${BASE_URL}/movie/${movieId}/reviews?api_key=${API_KEY}&language=en-US`;
  var movieReviews = await getData(url);
  movieReviews = movieReviews.data;

  res.status(200).json({
    details: singleMovieData,
    videos: movieVideos,
    reviews: movieReviews,
  });
};

const searchMovie = async (req, res) => {
  const { query } = req.params;
  var url = `
  ${BASE_URL}/search/movie?api_key=${API_KEY}&language=en-US&query=${query}&page=1&include_adult=true`;
  var searchedMovie = await getData(url);
  res.status(200).json(searchedMovie);
};

const animatedMovies = async (req, res) => {
  // &include_adult=false
  var url = `${BASE_URL}/discover/movie?api_key=${API_KEY}&with_genres=16&include_adult=false`;
  var animated = await getData(url);
  res.status(200).json(animated);
};

const getData = async (url) => {
  const response = await fetch(url);
  const json = await response.json();
  if (response.ok) {
    return { data: json, status: response.ok };
  } else {
    return { data: [], status: response.ok };
  }
};

module.exports = {
  getMovies,
  getSingleMovieDetail,
  getMovieGenre,
  searchMovie,
  animatedMovies
};
