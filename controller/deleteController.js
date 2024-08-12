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

const deleteCategory = async (req,res) =>{
    try{
        await deleteMethods.deleteCatShow(req.body.cId);
        await deleteMethods.deleteCategory(req.body.cId);
        res.redirect('/delete?choice=category');
    }
    catch(e){
        console.log(e);
    }
}

const deletetype = async (req,res) =>{
    try{
        await deleteMethods.deleteTypeShow(req.body.tId);
        await deleteMethods.deleteType(req.body.tId);
        res.redirect('/delete?choice=type');
    }
    catch(e){
        console.log(e);
    }
}
module.exports = {deleteShow,deleteCategory,deletetype}