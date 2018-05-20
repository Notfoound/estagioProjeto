'use strict';

const express = require('express');
const bodyParser = require('body-parser');

const vue = require('vue');
const mongoose = require('mongoose');

const app = express();
const router = express.Router();

//conectando ao banco mongoDb
mongoose.connect('mongodb://matheus:estagio2018@ds014658.mlab.com:14658/estagio')

//carregando os models
const User = require('./models/user');

//carregando as rotas
const index = require('./routes/indexRoute');
const auth = require('./routes/authRoute');

//aplicando a conversão do contseudo
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }))

//view engine
app.set('view engine', 'vue');

//Rotas configuradas
app.use('/', index);
app.use('/auth', auth);

module.exports = app;