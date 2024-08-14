const pool = require('./pool');

// READING QUERIESS!!!!!!!!!!!!!!!!!!!!!
const getShows = async () =>{
    try{
        return {rows} = await pool.query('SELECT * from show');
    }
    catch(e){
        console.log(e);
    }
}
const getShowT = async (type) =>{
    try{
        const typeId = await pool.query('select type_id from showtype where type_name = $1', [type]);
        return {rows} = await pool.query('SELECT * from show where show_type_id = $1', [typeId.rows[0].type_id]);
    }
    catch(e){
        console.log(e);
    }
}
const getDeleteShow = async () =>{
    try{
        return {rows} = await pool.query('SELECT show_id, show_name from show');
    }
    catch(e){
        console.log(e);
    }
}
const getCategories = async () =>{
    try{
        return {rows} = await pool.query('SELECT * from showcategory');
    }
    catch(e){
        console.log(e);
    }
}

const getTypes = async () =>{
    try{
        return {rows} = await pool.query('SELECT * from showtype');
    }
    catch(e){
        console.log(e);
    }
}

const getShowName = async (name) =>{
    try{
        const {rows} = await pool.query('SELECT show_name from show where show_name = $1', [name]);
        return showName = rows[0].show_name ;
    }
    catch(e){
        console.log(e);
    }
}

const getShowType = async (type_id) =>{
    try{
        const {rows} = await pool.query('SELECT type_name from showtype where type_id = $1', [type_id]);
        return typeName = rows[0].type_name;
    }
    catch(e){
        console.log(e);
    }
}

const getTypeId = async (typeName) =>{
    try{
        const {rows} = await pool.query('SELECT type_id from showtype where type_name = $1', [typeName]);
        return rows[0].type_id;
    }
    catch(e){
        console.log(e);
    }
}

const getCategoryId = async (categoryName) =>{
    try{
        const {rows} = await pool.query('SELECT category_id from showcategory where category_name = $1', [categoryName]);
        return rows[0].category_id;
    }
    catch(e){
        console.log(e);
    }
}

const getCountryId = async (countryName) =>{
    try{
        const {rows} = await pool.query('SELECT country_id from showcountry where country_name = $1', [countryName]);
        return rows[0].country_id;
    }
    catch(e){
        console.log(e);
    }
}

const getShowCategory = async (category_id) =>{
    try{
        const {rows} = await pool.query('SELECT category_name from showcategory where category_id = $1', [category_id]);
        return categoryName = rows[0].category_name;
    }
    catch(e){
        console.log(e);
    }
}

const getShowCountry = async (country_id) =>{
    try{
        const {rows} = await pool.query('SELECT country_name from showcountry where country_id = $1', [country_id]);
        return countryName = rows[0].country_name ;
    }
    catch(e){
        console.log(e);
    }
}

const getAllCountry = async () =>{
    try{
        return {rows} = await pool.query('SELECT country_name from showcountry');
    }
    catch(e){
        console.log(e);
    }
}

const getAllType = async () =>{
    try{
        return {rows} = await pool.query('SELECT type_name from showtype');
    }
    catch(e){
        console.log(e);
    }
}

const getAllCategory = async () =>{
    try{
        return {rows} = await pool.query('SELECT category_name from showcategory');
    }
    catch(e){
        console.log(e);
    }
}
const getShowByName = async (showname) =>{
    try{
        return {rows} = await pool.query('SELECT * from show where show_name = $1', [showname]);
    }
    catch(e){
        console.log(e);
    }
}
const getImgs = async () =>{
    try{
        return {rows} = await pool.query('SELECT image_name, data from images');
    }
    catch(e){
        console.log(e);
    }
}

const getMethods = {
    getShows,
    getShowCategory,
    getShowCountry,
    getShowType,
    getShowName,
    getAllCategory,
    getAllCountry,
    getAllType,
    getCategories,
    getTypes,
    getDeleteShow,
    getImgs,
    getShowT,
    getShowByName,
}
//READING ENDS HEREEE!!!!!!!!!!!!!!!!!!

// FOR ADDING QUIERES || INSERTING INTO DATABASE
// STARTS HERE!!!!!!!!!!!!!!!!!!!!!!!!!

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

const addShow = async (showType, showCategory,showCountry, showTitle, showRating,data) => {
    try{
        const tResult = await pool.query('SELECT type_id from showtype where type_name = $1', [showType]);
        const typeId = tResult.rows[0].type_id;

        const cat = await pool.query('SELECT category_id from showcategory where category_name = $1',[showCategory])
        const categoryId = cat.rows[0].category_id;

        const coResult = await pool.query('Select country_id from showcountry where country_name = $1', [showCountry]);
        const countryId = coResult.rows[0].country_id;

        await pool.query('INSERT INTO SHOW (show_type_id, showcategory_id, showcountry_id, show_name,show_rating,data) VALUES ($1,$2,$3,$4,$5,$6)', 
            [typeId,categoryId,countryId,showTitle,showRating,data]
        );
        console.log('inserted!');
    }
    catch(e){
        console.log(e);
    }
}

const addImg = async (showId,imgData,imgName) =>{
    try{
        await pool.query('insert into images (showId, data, image_name) values ($1,$2,$3)', [showId, imgData,imgName]);
        console.log('Inserted!');
    }
    catch(e){
        console.log(e);
    }
}
const addMethods = {
    addType,
    addCategory,
    addShow,
    addImg,
}
//ENDSS HEREEEE !!!!!!!!!!!!!!!!!!!!!!!!!

//UPDATE METHODSSS STARTTSS HERE!!!!!!!!!!!!!
const updateShow = async (showId,showName,showType, showCategory, showCountry, showRating) =>{
    try{
        const type = await getTypeId(showType);
        const category = await getCategoryId(showCategory);
        const country = await getCountryId(showCountry);
        
        await pool.query('UPDATE show set show_name = $1, show_type_id = $2, showcategory_id = $3, showcountry_id = $4,show_rating = $5 where show_id = $6',
            [showName,type,category,country,showRating,showId]);
    }
    catch(e){
        console.log(e);
    }
}
const updateCategory = async (categoryId, categoryName) =>{
    try{
        await pool.query('UPDATE showcategory set category_name = $1 where category_id = $2', [categoryName,categoryId]);
        console.log('Updated!');
    }
    catch(e){
        console.log(e);
    }
}

const updateType = async (typeId, typeName) =>{
    try{
        await pool.query('UPDATE showtype set type_name = $1 where type_id = $2', [typeName,typeId]);
        console.log('Updated!');
    }
    catch(e){
        console.log(e);
    }
}

const updateMethods = {updateShow, updateCategory, updateType};
//END OF UPDATE METHODSS!!!!!

//START OF DELETE METHODSS!!!!!!!

const deleteShow = async (showId, showName) => {
    try{
        await pool.query('delete from show where show_id = $1', [showId]);
        console.log(`${showName} is deleted!`);
    }
    catch(e){
        console.log(e);
    }
}

const deleteCategory = async (categoryId) =>{
    try{
        await pool.query('delete from showcategory where category_id = $1', [categoryId]);
        console.log('deleted!');
    }
    catch(e){
        console.log(e);
    }
}

const deleteType = async (typeId) =>{
    try{
        await pool.query('delete from showtype where type_id = $1', [typeId]);
    }
    catch(e){
        console.log(e);
    }
}

const deleteCatShow = async (catId) =>{
    await pool.query('delete from show where showcategory_id = $1', [catId]);
    console.log('affiliated show deleted!');
}

const deleteTypeShow = async (typeId) =>{
    await pool.query('delete from show where show_type_id = $1', [typeId]);
    console.log('affiliated show deleted!');
}

const deleteMethods = {deleteShow,deleteCategory,deleteType, deleteCatShow, deleteTypeShow};

module.exports = {addMethods,getMethods,updateMethods,deleteMethods};