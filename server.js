const express = require('express')
require('dotenv').config()
const router = require('./routes/index')
const path = require('path')
const database = require('./config/database')
const User = require('./models/User')
const DailyMeal = require('./models/DailyMeal')
const Measure = require('./models/Measure')
const session = require('express-session')
const SequelizeStore = require ('connect-session-sequelize')(session.Store) 

const myStore = new SequelizeStore({
    db:database
})
const app= express()
app.use(express.static(path.join(__dirname,'public')))
app.set('view engine','ejs')
app.use(express.urlencoded({extended: true}))
app.use(
    session({
        secret:process.env.FRASE_SECRET,
        store:myStore,
        resave:false,
        saveUninitialized:false,
        proxy:true
    })
)
myStore.sync()

Measure.belongsTo(User)
DailyMeal.belongsTo(User)
User.hasMany(Measure, {onDelete: 'CASCADE'})
User.hasMany(DailyMeal, {onDelete: 'CASCADE'})

database.sync()
.then(()=>{
    app.use('/', router)
    app.listen(4000)    
})