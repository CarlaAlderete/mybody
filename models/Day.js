const mongoose = require('mongoose')

const daySchema = new mongoose.Schema({
    userId:{type: mongoose.Types.ObjectId, ref: 'user'},
    day:[{
    toDay:String,
    breakfast:String,
    lunch:String,
    afternoonSnack:String,
    dinner:String,
    chest:String,
    hip:String,
    waist:String,
    rightThigh: String, 
    leftThigh: String,
    upperArm:String,
    calf:String,
    weight:String,
    imc:String,
    gc:String
  }]
})
const Day = new mongoose.model('day', daySchema)
module.exports= Day