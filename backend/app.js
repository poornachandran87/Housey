const express = require('express')
const cookieParser = require('cookie-parser')

const auth = require('./routes/auth')
const errorMiddleWare = require('./middlewares/error');
const app = express()

app.use(express.urlencoded({extended:true}));
app.use(express.json())
app.use(cookieParser());

app.use('/api/v1/',auth);

app.use(errorMiddleWare)
module.exports = app;    