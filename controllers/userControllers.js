const User = require('../models/User')
const bcryptjs = require('bcryptjs')

const userControllers ={
    addUser:async(req,res)=>{
        let {name, mail, password} = req.body
        const hashedPassword = bcryptjs.hashSync(password)
        const newUser = new User({name, mail, password:hashedPassword})
        try{
            let repeatUser = await User.findOne({mail:mail})
            if(repeatUser) throw new Error('Mail is being used with another account')
            await newUser.save()
            res.redirect('/home')
        }catch(err){
            console.log(err)
        }
    }
}
module.exports= userControllers