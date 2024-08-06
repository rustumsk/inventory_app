const express = require('express');
const path = require("node:path");
const {populate} = require('./model/populateDb');
const app = express();
const homeRouter = require('./routes/homeRoute');

require('dotenv').config();

app.set("views", path.join(__dirname, "view"));
app.set("view engine", "ejs");

app.use(express.urlencoded({extended: true}));

app.use('/', homeRouter);

const PORT = process.env.PORT;

app.listen(PORT, () => console.log(`Server is up, Listening in PORT: ${PORT}`));