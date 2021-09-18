const User = require('../models/User')
const Day = require('../models/Day')
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
            req.session.login = true
            req.session._id = newUser._id
            req.session.name = newUser.name
            req.session.age = newUser.age
            req.session.height = newUser.height
            res.redirect('/home')
        }catch(err){
            res.render('signUp', {
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
            req.session.login = true
            req.session._id = userExit._id
            req.session.name = userExit.name
            req.session.age = userExit.age
            req.session.height = userExit.height
            res.redirect('/home')
        }catch(err){
            res.render('index',{
                error:err.message
            })
        }  
    },
    signout:(req,res)=>{
        req.session.destroy(()=>{
            res.redirect('/')
        })
    },
    editUser:async(req,res)=>{
        try{
            let editUser = await User.findOneAndUpdate({_id:req.params.id},{...req.body},{new:true})
            req.session.age = editUser.age
            req.session.height = editUser.height
            res.redirect('/home')
        }catch(err){
            res.redirect('/forms')
        }

    },
    deleteUser:async(req,res)=>{
        try{
            await Day.findOneAndDelete({userId:req.params.id})
            await User.findOneAndDelete({_id:req.params.id})
            req.session.destroy(()=>{
                res.redirect('/')
            })
        }catch(err){
            res.redirect('/forms')
        }
    }
}
module.exports= userControllers