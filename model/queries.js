const pool = require('./pool');

const addType = async (typeName) =>{
    try{
        await pool.query('INSERT INTO SHOWTYPE (type_name) VALUES ($1)', [typeName]);
        console.log("Type Created!")
    }
    catch(e){
        console.log(e);
    }
}

const addCategory = async (categoryName) => {
    try{
        await pool.query('INSERT INTO SHOWCATEGORY (category_name) VALUES ($1)', [categoryName]);
        console.log("Category Created!")
    }
    catch(e){
        console.log(e);
    }
}

const addShow = async (showType, showCategory,showCountry, showTitle, showRating) => {
    try{
        const tResult = await pool.query('SELECT type_id from showtype where type_name = $1', [showType]);
        const typeId = tResult.rows[0].type_id;

        const cResult = await pool.query('Select category_id from showcategory where category_name = $1', [showCategory]);
        const categoryId = cResult.rows[0].category_id;

        const coResult = await pool.query('Select country_id from showcountry where country_name = $1', [showCountry]);
        const countryId = coResult.rows[0].country_id;

        await pool.query('INSERT INTO SHOW (show_type_id, showcategory_id, showcountry_id, show_name,show_rating) VALUES ($1,$2,$3,$4,$5)', 
            [typeId,categoryId,countryId,showTitle,showRating]
        );
        console.log('inserted!');
    }
    catch(e){
        console.log(e);
    }
}

module.exports = {addType, addCategory,addShow}