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

    const ty = await getMethods.getShowType(req.query.type);
    const ca = await getMethods.getShowCategory(req.query.category);
    const con = await getMethods.getShowCountry(req.query.country);
    
    const id = req.query.id
    const rating = req.query.rating;
    const name = req.query.name;
    const sArr = {
        id,
        type,
        category,
        country,
        rating,
        name,
        ty,
        ca,
        con
    }
    res.render('update', {option, show, array, sArr});
}

module.exports = {getAdd, getUpdate};