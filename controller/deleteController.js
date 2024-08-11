const {deleteMethods} = require('../model/queries');

const deleteShow = async (req,res) =>{
    try{
        await deleteMethods.deleteShow(req.body.sId,req.body.sName)
        console.log('Deleted!');
        res.redirect('/delete?choice=show');
    }
    catch(e){
        console.log(e);
    }
}

module.exports = {deleteShow}