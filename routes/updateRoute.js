const {Router} = require('express');
const {getUpdate} = require('../controller/infoController');
const updateRouter = Router();

updateRouter.get('/', getUpdate);

module.exports = updateRouter;