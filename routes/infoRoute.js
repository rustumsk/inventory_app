const { Router } = require('express');
const infoRouter = Router();
const { getInfo, getAdd, getUpdate, getDelete } = require('../controller/infoController');

// Route for displaying information page with options
infoRouter.get('/', getInfo);

// Route for handling add functionality
infoRouter.get('/add', getAdd);

// Route for handling update functionality
infoRouter.get('/update', getUpdate);

// Route for handling delete functionality
infoRouter.get('/delete', getDelete);

module.exports = infoRouter;