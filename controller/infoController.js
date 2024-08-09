const getAdd = (req,res) =>{
    const option = req.query.choice;
    res.render('add', {option});
}

module.exports = {getAdd};