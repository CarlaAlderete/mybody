const Sequelize = require('sequelize')
const database = require ('../config/database')

const User = database.define('user',{
  id:{
    type:Sequelize.INTEGER,
    autoIncrement:true,
    allowNull:false,
    primaryKey:true,
  },
  name:{
    type:Sequelize.STRING,
    allowNull:false,
    validate:{
      isAlpha: true,
      len:[2,30]
    }
  },
  mail:{
    type:Sequelize.STRING,
    allowNull:false,
    unique:true,
    validate:{
      isEmail: true
    },
  },
  password:{
    type:Sequelize.STRING,
    allowNull:false,
  },
  age:{
    type:Sequelize.INTEGER,
    validate:{
      isNumeric: true,
      max: 100,
    }
  },
  height:{
    type:Sequelize.INTEGER,
    validate:{
      isNumeric: true,
      max: 220,
    }
  }
},{
  timestamps: false
})

module.exports=User