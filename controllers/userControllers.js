const User = require('../models/User')
const bcryptjs = require('bcryptjs')

const userControllers={
    singUp:async(req,res)=>{
        let {name, mail, password}=req.body
        const hashedPassword = bcryptjs.hashSync(password)
        try{
            let userExist = await User.findOne({ where :{mail}})
            if(userExist) throw new Error ('Mail is being used with another account')
            let newUser = await new User({
                name,
                mail,
                password:hashedPassword
            })
            await newUser.save()
            req.session.login = true
            req.session._id = newUser.id
            req.session.name = newUser.name
            req.session.age = null
            req.session.height = null
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
            let userExit = await User.findOne({ where :{mail}})
            if(!userExit) throw new Error('The data entered is not valid. Please, try again.')
            let match = bcryptjs.compareSync(password, userExit.password)
            if(!match) throw new Error('The data entered is not valid. Please, try again.')
            req.session.login = true
            req.session._id = userExit.id
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
}
module.exports = userControllers

 
//     editUser:async(req,res)=>{
//         try{
//             let editUser = await User.findOneAndUpdate({_id:req.params.id},{...req.body},{new:true})
//             req.session.age = editUser.age
//             req.session.height = editUser.height
//             res.redirect('/home')
//         }catch(err){
//             res.redirect('/forms')
//         }

//     },
//     deleteUser:async(req,res)=>{
//         try{
//             await Day.findOneAndDelete({userId:req.params.id})
//             await User.findOneAndDelete({_id:req.params.id})
//             req.session.destroy(()=>{
//                 res.redirect('/')
//             })
//         }catch(err){
//             res.redirect('/forms')
//         }
//     }
// }
