const express = require('express')
const router = require('./routes/index')
const session = require('express-session')
require('dotenv').config()
require("./config/database")
const mongo = require('connect-mongodb-session')(session)
const store = new mongo({
    uri:process.env.MONGODB,
    collection: 'sessions'
})


const app= express()
app.use(express.static('public'))
app.set('view engine','ejs')
app.use(express.urlencoded({extended: true}))
app.use(session({
    secret: process.env.SESSION_FRASE,
    resave:false,
    saveUninitialized:false,
    store: store
}))

app.use('/', router)

app.listen(4000, () => console.log('Server listening'))