const Measure = require('../models/Measure')
const DailyMeal = require('../models/DailyMeal')

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
        try{
            let getMeasure = await Measure.findOne({limit:1, where:{userId:req.session._id}, order:[['today','DESC']], raw:true})
            let getDailyMeal = await DailyMeal.findOne({limit:1, where:{userId:req.session._id}, order:[['today','DESC']], raw:true})
            res.render('home',{
            name:req.session.name,
            id: req.session._id,
            age: req.session.age,
            height: req.session.height,
            dailyMeals:!getDailyMeal ? null : getDailyMeal,
            measures:!getMeasure ? null : getMeasure
        })
        }catch(err){
            res.render('home',{
                name:req.session.name,
                id: req.session._id,
                age: req.session.age,
                height: req.session.height,
                dailyMeals:null,
                measures:null
            })
        }
    },
    homeDay:async(req,res)=>{
        try{
            let measureSelect = await Measure.findOne({where:{userId:req.session._id, today:req.body.selectDay}})
            let dailyMealSelect = await DailyMeal.findOne({where:{userId:req.session._id, today:req.body.selectDay}})
            return res.render('home',{
                id: req.session._id,
                name: req.session.name,
                age: req.session.age,
                height: req.session.height,
                dailyMeals: dailyMealSelect ? dailyMealSelect : 'There is no information',
                measures: measureSelect ? measureSelect : 'There is no information'
            })
        }catch(err){
            return res.render('home',{
                id: req.session._id,
                name: req.session.name,
                age: req.session.age,
                height: req.session.height,
                dailyMeals: 'Oops! an error has occurred try again later',
                measures: 'Oops! an error has occurred try again later'
            })
        }
    },
    forms:async(req,res)=>{
        if(req.session.login){
            try{
                let getMeasure = await Measure.findAll({limit:1, where:{userId:req.session._id}, order:[['today','DESC']], raw:true})
                let getDailyMeal = await DailyMeal.findAll({limit:1, where:{userId:req.session._id}, order:[['today','DESC']], raw:true})
                return res.render('forms',{
                    name:req.session.name,
                    id: req.session._id,
                    age: req.session.age,
                    height: req.session.height,
                    dailyMeals: getDailyMeal.leght ? null : getDailyMeal[0],
                    measures: getMeasure.leght  ? null : getMeasure[0]
                })
            }catch(err){
                return res.render('forms',{
                    name:req.session.name,
                    id: req.session._id,
                    age: req.session.age,
                    height: req.session.height,
                    dailyMeals: null,
                    measures: null
                })
            }
        }
        res.redirect('/')
    }
}
module.exports= myBodyControllers