const { getMethods } = require('../model/queries');

const getAdd = async (req,res) =>{
    const t = await getMethods.getTypes();
    const typeArr = t.rows;

    const c = await getMethods.getCategories();
    const catArr = c.rows;

    const co = await getMethods.getAllCountry();
    const conArr = co.rows;

    const option = req.query.choice;

    res.render('add', { option, typeArr,catArr,conArr });
}

const getUpdate = async (req,res) =>{
    const option = req.query.choice;

    const show = req.query.show;

    const arr = await getMethods.getShows();
    const array = arr.rows;

    const c1 = await getMethods.getCategories();
    const cArr = c1.rows;

    const c2 = await getMethods.getTypes();
    const cType = c2.rows;

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
    const catId = req.query.cId;
    const cName = req.query.cCategory;
    const catArr = {
        cArr,
        cName,
        catId,
    }

    const typeId = req.query.tId;
    const typeName = req.query.typeName;

    const typeObject = {
        typeId,
        typeName
    }
    res.render('update', {option, show, array, sArr, cType, catArr, typeObject});
}

const getDelete = async (req,res) =>{
    const option = req.query.choice;
    const show = req.query.show;
    const sa = await getMethods.getShows();
    const showArr = sa.rows;

    const ca = await getMethods.getCategories();
    const catArr = ca.rows;

    const t = await getMethods.getTypes();
    const typeArr = t.rows;

    let sInfo = {};
    let showId;
    let showName;

    let cInfo = {};
    let cId;
    let catName;

    let tInfo = {};
    let tId;
    let typeName;

    if (req.query.show === 'yes'){
        if (option === 'show'){
            showId = req.query.sId;
            showName = req.query.showName;
            sInfo = {
                showId,
                showName,
            }
            console.log("Nigga");
        }

        else if (option === 'category'){
            cId = req.query.cId;
            catName = req.query.catName;
            cInfo = {
                cId,
                catName,
            }
        }

        else if (option === 'type'){
            tId = req.query.tId;
            typeName = req.query.typeName;

            tInfo = {
                tId,
                typeName,
            }

        }
    }

    res.render('delete', {option, showArr,show,sInfo, catArr, cInfo, typeArr, tInfo});
}

module.exports = {getAdd, getUpdate, getDelete};