
const {Router} = require('express');
const multer  = require('multer');

const storage = multer.memoryStorage();
const upload = multer({ storage: storage });

const addRouter = Router();
const {getAdd} = require('../controller/infoController');
const {aType, aCategory, aShow} = require('../controller/addController');

addRouter.get('/', getAdd);
addRouter.post('/show', upload.single('pic'), aShow);
addRouter.post('/category', aCategory);
addRouter.post('/type', aType);

module.exports = addRouter;