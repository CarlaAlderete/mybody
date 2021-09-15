const path = require('path')

const myBodyControllers ={
    signUp: (req, res)=>{
        res.render('index')
    },
    signIn: (req,res)=>{
        res.render('signIn')
    },
    home: (req,res)=>{
        res.render('home')
    }
}
module.exports = myBodyControllers