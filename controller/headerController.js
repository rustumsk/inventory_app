const getInfo = (req,res) =>{
    const option = req.query.option === 'true';
    res.render('info', {option});
}

module.exports = {getInfo};