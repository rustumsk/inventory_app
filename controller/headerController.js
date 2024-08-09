const getInfo = (req,res) =>{
    const aOption = req.query.aOption === 'true';
    const uOption = req.query.uOption === 'true';
    const dOption = req.query.dOption === 'true';
    res.render('info', {aOption, uOption, dOption});
}

module.exports = {getInfo};