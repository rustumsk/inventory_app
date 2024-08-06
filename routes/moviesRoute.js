const {Router} = require('express');
const movieRouter = Router();
const {getMovies} = require('../controller/movieController');

movieRouter.get('/', getMovies);

module.exports = movieRouter;