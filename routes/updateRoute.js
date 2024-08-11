const {Router} = require('express');
const {getUpdate} = require('../controller/infoController');
const {updateShow,updateCategory,updateType} = require('../controller/updateController');
const updateRouter = Router();


updateRouter.get('/', getUpdate);
updateRouter.post('/show', updateShow);
updateRouter.post('/category',updateCategory);
updateRouter.post('/type', updateType);

module.exports = updateRouter;