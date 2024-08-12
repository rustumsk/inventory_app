const {Router} = require('express');

const deleteRoute = Router();
const { getDelete } = require('../controller/infoController');
const {deleteShow,deleteCategory, deletetype} = require('../controller/deleteController');
deleteRoute.get('/', getDelete);
deleteRoute.post('/show', deleteShow);
deleteRoute.post('/category', deleteCategory);
deleteRoute.post('/type', deletetype);
module.exports = deleteRoute;