const {Router} = require('express');
const {getHome} = require('../controller/homeController');
const addRouter = require('./addRoute')
const homeRouter = Router();
const updateRouter = require('./updateRoute');
const infoRouter = require('./infoRoute');
const deleteRoute = require('./deleteRoute');
const { getMethods } = require('../model/queries');

homeRouter.get('/', getHome);
homeRouter.get('/sample', async (req, res) => {
    try {
        const result = await getMethods.getImgs(); // Fetch image data
        const image = result.rows[0];

        if (!image) {
            return res.status(404).send('Image not found');
        }

        // Convert binary data to base64
        const base64Image = image.data.toString('base64');
        const imgSrc = `data:image/jpeg;base64,${base64Image}`; // Adjust MIME type if necessary

        // Pass the base64 string to the template
        res.render('sample', { imgSrc });
    } catch (error) {
        console.error('Error fetching image:', error);
        res.status(500).send('Error fetching image');
    }
});
homeRouter.use('/info', infoRouter);
homeRouter.use('/add', addRouter);
homeRouter.use('/update', updateRouter);
homeRouter.use('/delete', deleteRoute);
homeRouter.post('/', (req,res) =>{
    console.log(req.body);
    res.redirect('/');
});


module.exports = homeRouter;