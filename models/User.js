const mongoose = require('mongoose')

const userSchema = new mongoose.Schema({
  name:String,
  mail:String,
  password:String,
  age:Number,
  height:Number,
  dailyLog:[{
    day:String,
    breakfast:String,
    lunch:String,
    afternoonSnack:String,
    dinner:String,

  }],
  bodyMeasurements:[{
    day:String,
    chest:Number,
    hip:Number,
    waist:Number,
    rightThigh: Number, 
    leftThigh: Number,
    upperArm:Number,
  }],
  weight:[{
    day:String,
    weight:String,
    imc:Number,
    gc:Number
  }]
});

const User = mongoose.model('user', userSchema)

module.exports = User