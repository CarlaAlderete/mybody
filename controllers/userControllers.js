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
            res.render('index', {
                error:err.message
            })
        }
    },
    signUser:async(req,res)=>{
        let{mail,password} = req.body
        try{
            let userExit = await User.findOne({mail:mail})
            if(!userExit) throw new Error('The data entered is not valid. Please, try again.')
            let match = bcryptjs.compareSync(password, userExit.password)
            if(!match) throw new Error('The data entered is not valid. Please, try again.')
            
            res.redirect('/home')
        }catch(err){
            res.render('signin',{
                error:err.message
            })
        }  
    }
}
module.exports= userControllers