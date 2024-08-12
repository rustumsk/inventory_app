const pool = require('../model/pool');

const getHome = async (req,res) =>{
    const {rows} = await pool.query('Select show_name, show_rating from show');
    res.render('home');
}
const getSearch = async (req,res) =>{
    
}

module.exports = {getHome}