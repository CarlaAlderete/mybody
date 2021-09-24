const Sequelize = require('sequelize')
const database = require ('../config/database')

const DailyMeal = database.define('dailyMeal',{
  id:{
    type:Sequelize.INTEGER,
    autoIncrement:true,
    allowNull:false,
    primaryKey:true,
  },
  breakfast:{
    type:Sequelize.STRING
  },
  lunch:{
    type:Sequelize.STRING
  },
  afternoonSnack:{
    type:Sequelize.STRING
  },
  dinner:{
    type:Sequelize.STRING
  }
},{
  timestamps: true,
  updatedAt:false
})
module.exports=DailyMeal