const Sequelize = require('sequelize')
const database = require ('../config/database')

const Measure = database.define('measure',{
  id:{
    type:Sequelize.INTEGER,
    autoIncrement:true,
    allowNull:false,
    primaryKey:true,
  },
  today:{
    type:Sequelize.STRING
  },
  chest:{
    type:Sequelize.INTEGER,
    validate:{
      max: 200,
    }
  },
  hip:{
    type:Sequelize.INTEGER,
    validate:{
      max: 200,
    }
  },
  waist:{
    type:Sequelize.INTEGER,
    validate:{
      max: 200,
    }
  },
  rightThigh:{
    type:Sequelize.INTEGER,
    validate:{
      max: 200,
    }
  },
  leftThigh:{
    type:Sequelize.INTEGER,
    validate:{
      max: 200,
    }
  },
  upperArm:{
    type:Sequelize.INTEGER,
    validate:{
      max: 200,
    }
  },
  calf:{
    type:Sequelize.INTEGER,
    validate:{
      max: 200,
    }
  },
  weight:{
    type:Sequelize.INTEGER,
    validate:{
      max: 400,
    }
  }
},{
  timestamps: true,
  updatedAt:false
})

module.exports=Measure
