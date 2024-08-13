const {addMethods} = require('../model/queries');

const aType = (req,res) =>{
    console.log(req.body);
    addMethods.addType(req.body.type);
    res.redirect('/info');
}
const aShow = (req,res) =>{

    const {originalname, buffer} = req.file;

    console.log(req.body.sType, req.body.sCategory, req.body.sCountry, req.body.sTitle, req.body.sRating);
    addMethods.addShow(req.body.sType, req.body.sCategory, req.body.sCountry, req.body.sTitle, req.body.sRating);
    addMethods.addImg(buffer,originalname);
    res.redirect('/info');
}
const aCategory = (req,res) =>{
    addMethods.addCategory(req.body.category)
    res.redirect('/info');
}

module.exports = {aType, aCategory, aShow}