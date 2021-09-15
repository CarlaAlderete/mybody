const path = require('path')

const myBodyControllers ={
    signUp: (req, res)=>{
        res.sendFile(path.join(__dirname, '..', 'views/index.html'))
    },
    signIn: (req,res)=>{
        res.sendFile(path.join(__dirname, '..', 'views/signIn.html'))
    },
    home: (req,res)=>{
        res.sendFile(path.join(__dirname, '..', 'views/home.html'))
    }
}
module.exports = myBodyControllers