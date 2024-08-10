const { getMethods } = require('../model/queries');

const getAdd = (req,res) =>{
    const option = req.query.choice;
    res.render('add', {option});
}

const getUpdate = async (req,res) =>{
    const option = req.query.choice;

    const show = req.query.show;

    const arr = await getMethods.getShows();
    const array = arr.rows;

    const t = await getMethods.getAllType();
    const type = t.rows;

    const c = await getMethods.getAllCategory();
    const category = c.rows;

    const co = await getMethods.getAllCountry();
    const country = co.rows;
    
    const id = req.query.id
    const rating = req.query.rating;
    const name = req.query.name;
    const sArr = {
        id,
        type,
        category,
        country,
        rating,
        name
    }
    res.render('update', {option, show,array, sArr});
}

module.exports = {getAdd, getUpdate};