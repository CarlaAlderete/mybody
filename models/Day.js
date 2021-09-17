const mongoose = require('mongoose')

const daySchema = new mongoose.Schema({
    userId:{type: mongoose.Types.ObjectId, ref: 'user'},
    dailyMeals:[{
        toDay:String,
        breakfast:String,
        lunch:String,
        afternoonSnack:String,
        dinner:String,
    }],
    measures:[{
        toDay:String,
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