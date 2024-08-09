const {Router} = require('express');
const infoRouter = Router();
const {getInfo} = require('../controller/headerController');

infoRouter.get('/', getInfo);

module.exports =  infoRouter;
