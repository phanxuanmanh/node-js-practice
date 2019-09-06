const express = require('express');
const path = require('path');
const cookieParser = require('cookie-parser');
const bodyParser = require("body-parser");

const indexRouter = require('./routes/index');

const app = express();
app.use(express.json());
app.use(express.urlencoded({extended: false}));
app.use(cookieParser());
//Get json as body of request
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', indexRouter);

module.exports = app;
