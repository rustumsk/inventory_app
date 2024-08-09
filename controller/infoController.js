const getAdd = (req,res) =>{
    const option = req.query.choice;
    res.render('add', {option});
}

const getUpdate = (req,res) =>{
    const option = req.query.choice;
    res.render('update', {option})
}

module.exports = {getAdd, getUpdate};