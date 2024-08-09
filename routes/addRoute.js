const {Router} = require('express');

const addRouter = Router();
const {getAdd} = require('../controller/infoController');
const {aType, aCategory, aShow} = require('../controller/addController');

addRouter.get('/', getAdd);
addRouter.post('/show', aShow);
addRouter.post('/category', aCategory);
addRouter.post('/type', aType);

module.exports = addRouter;