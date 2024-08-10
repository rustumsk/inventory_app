const {Router} = require('express');
const {getUpdate} = require('../controller/infoController');
const {updateShow} = require('../controller/updateController');
const updateRouter = Router();


updateRouter.get('/', getUpdate);
updateRouter.post('/show', updateShow);

module.exports = updateRouter;