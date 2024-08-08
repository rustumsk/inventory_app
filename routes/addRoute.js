const {Router} = require('express');

const addRouter = Router();
const {getAdd} = require('../controller/infoController');

addRouter.get('/', getAdd);

module.exports = addRouter;