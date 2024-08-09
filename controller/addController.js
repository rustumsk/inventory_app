const {addType, addCategory, addShow} = require('../model/queries');

const aType = (req,res) =>{
    addType(req.body.type);
    res.redirect('/info');
}
const aShow = (req,res) =>{
    addShow(req.body.sType, req.body.sCategory, req.body.sCountry, req.body.sTitle, req.body.sRating);
    res.redirect('/info');
}
const aCategory = (req,res) =>{
    addCategory(req.body.category)
    res.redirect('/info');
}

module.exports = {aType, aCategory, aShow}