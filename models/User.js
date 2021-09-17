const mongoose = require('mongoose')

const userSchema = new mongoose.Schema({
  name:String,
  mail:String,
  password:String,
  age:String,
  height:String,
})

const User = mongoose.model('user', userSchema)

module.exports = User