const {Router} = require('express');

const deleteRoute = Router();
const { getDelete } = require('../controller/infoController');
const {deleteShow} = require('../controller/deleteController');
deleteRoute.get('/', getDelete);
deleteRoute.post('/show', deleteShow);

module.exports = deleteRoute;