const {updateMethods} = require('../model/queries');

const updateShow = async (req,res) =>{
    await updateMethods.updateShow(req.body['s-id'], req.body['s-name'], req.body['s-type'], req.body['s-cat'], req.body['s-country'], req.body['s-rating']);
    res.redirect('/update?choice=show');
}

module.exports = {updateShow};