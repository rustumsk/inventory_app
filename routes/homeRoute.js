const {Router} = require('express');
const {getHome} = require('../controller/homeController');
const homeRouter = Router();
const infoRouter = require('./infoRoute');

homeRouter.get('/', getHome);
homeRouter.use('/info', infoRouter);

module.exports = homeRouter;