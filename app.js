const express = require('express');
const path = require("node:path");
const {populate} = require('./model/populateDb');
const app = express();
const homeRouter = require('./routes/homeRoute');
const movieRouter = require('./routes/moviesRoute');

populate();
require('dotenv').config();
app.set("views", path.join(__dirname, "view"));
app.set("view engine", "ejs");

app.use(express.urlencoded({extended: true}));

const assetsPath = path.join(__dirname, "public");
app.use(express.static(assetsPath));

app.use('/', homeRouter);
app.use('/movies', movieRouter);

const PORT = process.env.PORT;

app.listen(PORT, () => console.log(`Server is up, Listening in PORT: ${PORT}`));