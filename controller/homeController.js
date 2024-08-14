const pool = require('../model/pool');
const {getMethods} = require('../model/queries');
const { search } = require('../routes/addRoute');
const getHome = async (req, res) => {
    const choice = req.query.filter;
    
    let showArr;
    let movieArr;
    let tvShowArr;
    let searchArr;
    if (choice === 'home') {
        const s = await getMethods.getShows();
        showArr = s.rows;

        // Convert image buffers to base64 strings
        showArr = showArr.map(show => {
            if (show.data) {
                const base64Image = show.data.toString('base64');
                show.data = `data:image/jpeg;base64,${base64Image}`; 
            }
            return show;
        });
    }
    else if (choice === 'movie'){
        const t = await getMethods.getShowT('MOVIE');
        movieArr = t.rows;

        movieArr = movieArr.map(movie => {
            if (movie.data) {
                const base64Image = movie.data.toString('base64');
                movie.data = `data:image/jpeg;base64,${base64Image}`; 
            }
            return movie;
        });
    }
    else if (choice === 'tvshow'){
        const tv = await getMethods.getShowT('TV_SHOW');
        tvShowArr = tv.rows;

        tvShowArr = tvShowArr.map(tshow => {
            if (tshow.data) {
                const base64Image = tshow.data.toString('base64');
                tshow.data = `data:image/jpeg;base64,${base64Image}`; 
            }
            return tshow;
        });
    }
    else if (choice === 'search'){
        const value = req.query.val;
        const s = await getMethods.getShowByName(value);

        searchArr = s.rows;
        searchArr = searchArr.map(search => {
            if (search.data) {
                const base64Image = search.data.toString('base64');
                search.data = `data:image/jpeg;base64,${base64Image}`; 
            }
            return search;
        });
    }
    else{
        const s = await getMethods.getShows();
        showArr = s.rows;

        // Convert image buffers to base64 strings
        showArr = showArr.map(show => {
            if (show.data) {
                const base64Image = show.data.toString('base64');
                show.data = `data:image/jpeg;base64,${base64Image}`; 
            }
            return show;
        });
    }
    res.render('home', { choice, showArr,movieArr,tvShowArr,searchArr });
}
const getSearch = async (req,res) =>{
    
}

module.exports = {getHome}