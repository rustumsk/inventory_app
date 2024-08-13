const pool = require('../model/pool');

const getHome = async (req,res) =>{
    const choice = req.query.filter;
    res.render('home', {choice});
}
const getSearch = async (req,res) =>{
    
}

module.exports = {getHome}