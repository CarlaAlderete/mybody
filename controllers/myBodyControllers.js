const path = require('path')

const myBodyControllers ={
    home: (req, res)=>{
        res.sendFile(path.join(__dirname, '..', 'views/index.html'))
    },
    signUp: (req,res)=>{
        res.sendFile(path.join(__dirname, '..', 'views/singUp.html'))
    }
}
module.exports = myBodyControllers