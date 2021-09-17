const mongoose = require('mongoose')

const userSchema = new mongoose.Schema({
  name:String,
  mail:String,
  password:String,
  age:{type:String, default:null},
  height:{type:String, default:null},
})

const User = mongoose.model('user', userSchema)

module.exports = User