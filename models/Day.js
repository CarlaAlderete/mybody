const mongoose = require('mongoose')

const daySchema = new mongoose.Schema({
    date:String,
    userId:{type: mongoose.Types.ObjectId, ref:'user'},
    dailyLog:[{
        breakfast:String,
        lunch:String,
        afternoonSnack:String,
        dinner:String
    }],
    bodyMeasurements:[{
        chest:Number,
        hip:Number,
        waist:Number,
        rightThigh: Number, 
        leftThigh: Number,
        upperArm:Number,
        calf:Number
    }],
    weight:[{
        weight:String,
        imc:Number,
        gc:Number
    }]
})

const Day = mongoose.model('day', daySchema)

module.exports = Day