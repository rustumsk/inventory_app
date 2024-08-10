const {Router} = require('express');
const {getUpdate} = require('../controller/infoController');
const updateRouter = Router();


updateRouter.get('/', getUpdate);
updateRouter.post('/show', (req,res) =>{
    console.log(req.body);
    res.send("Hello");

})

module.exports = updateRouter;