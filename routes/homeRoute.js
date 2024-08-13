const {Router} = require('express');
const {getHome} = require('../controller/homeController');
const addRouter = require('./addRoute')
const homeRouter = Router();
const updateRouter = require('./updateRoute');
const infoRouter = require('./infoRoute');
const deleteRoute = require('./deleteRoute');

homeRouter.get('/', getHome);
homeRouter.use('/info', infoRouter);
homeRouter.use('/add', addRouter);
homeRouter.use('/update', updateRouter);
homeRouter.use('/delete', deleteRoute);
homeRouter.post('/', (req,res) =>{
    console.log(req.body);
    res.redirect('/');
});


module.exports = homeRouter;