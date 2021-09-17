const Day = require('../models/Day')

const myBodyControllers = {
    signUp: (req, res)=>{
        if(req.session.login){
            res.redirect('/home')
        }
        res.render('signUp',{
            error: null
        })
    },
    signIn: (req,res)=>{
        if(req.session.login){
            res.redirect('/home')
        }
        res.render('index',{
            error: null
        })
    },
    home:async(req,res)=>{
        if(req.session.login){
            let today = await Day.findOne({userId:req.session._id})
            console.log(req.session)
            return res.render('home',{
                id: req.session._id,
                name: req.session.name,
                age: req.session.age,
                height: req.session.height,
                dailyMeals: today ? today.dailyMeals[today.dailyMeals.length -1] : null,
                measures: today ? today.measures[today.measures.length -1] : null
            })
        }
        res.redirect('/')
    },
    forms:async(req,res)=>{
        if(req.session.login){
            let today = await Day.findOne({userId:req.session._id})
            return res.render('forms',{
                id: req.session._id,
                name: req.session.name,
                age: req.session.age,
                height: req.session.height,
                dailyMeals: today ? today.dailyMeals[today.dailyMeals.length -1] : null,
                measures: today ? today.measures[today.measures.length -1] : null
            })
        }
        res.redirect('/')
    }
}
module.exports= myBodyControllers