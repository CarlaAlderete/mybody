const mongoose = require('mongoose')

const userSchema = new mongoose.Schema({
  name:String,
  mail:String,
  password:String,
  age:Number,
  height:Number,
  day:[{
    toDay:String,
    dailyLog:{
      breakfast:String,
      lunch:String,
      afternoonSnack:String,
      dinner:String
    },
    bodyMeasurements:{
      chest:Number,
      hip:Number,
      waist:Number,
      rightThigh: Number, 
      leftThigh: Number,
      upperArm:Number,
      calf:Number
    },
    weight:{
      weight:String,
      imc:Number,
      gc:Number
    }
  }]
})

const User = mongoose.model('user', userSchema)

module.exports = User