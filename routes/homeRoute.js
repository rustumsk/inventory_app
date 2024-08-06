const {Router} = require('express');
const {getHome} = require('../controller/homeController');
const homeRouter = Router();

homeRouter.get('/', getHome);

module.exports = homeRouter;