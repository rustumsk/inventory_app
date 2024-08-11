const {updateMethods} = require('../model/queries');

const updateShow = async (req,res) =>{
    await updateMethods.updateShow(req.body['s-id'], req.body['s-name'], req.body['s-type'], req.body['s-cat'], req.body['s-country'], req.body['s-rating']);
    res.redirect('/update?choice=show');
}
const updateCategory = async (req,res) =>{
    await updateMethods.updateCategory(req.body['c-id'], req.body.catName);
    res.redirect('/update?choice=category');
}
const updateType = async (req,res) =>{
    await updateMethods.updateType(req.body['t-id'], req.body.typeName);
    res.redirect('/update?choice=type');
}
module.exports = {updateShow,updateCategory,updateType};