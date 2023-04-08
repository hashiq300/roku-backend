const { API_KEY, BASE_URL } = require("./constants");

const ACTION = `${BASE_URL}/discover/movie?api_key=${API_KEY}&with_genres=28`;

const MOVIE_GENRE = `${BASE_URL}/genre/movie/list?api_key=${API_KEY}&language=en-US`

const SINGLE_MOVIE = `${BASE_URL}/movie/5675?api_key=${API_KEY}&language=en-US`

module.exports = {
    ACTION,
    MOVIE_GENRE
}