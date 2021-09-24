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
        console.log(req.session)
        let getMeasure = await Measure.findAll({limit:1, where:{userId:req.session._id}, order:[['createdAt','DESC']], raw:true})
        console.log(getMeasure)
        let getDailyMeal = await DailyMeal.findAll({limit:1, where:{userId:req.session._id}, order:[['createdAt','DESC']], raw:true})
        console.log(getDailyMeal)
        res.render('home',{
            name:req.session.name,
            id: req.session._id,
            age: req.session.age,
            height: req.session.height,
            dailyMeals:!getDailyMeal.leght ? null : getDailyMeal.leght[0],
            measures:!getMeasure.leght  ? null : getMeasure.leght[0]
        })
    },
    // homeDay:async(req,res)=>{
    //     let today = await Day.findOne({userId:req.session._id})
    //     let dailyMealsSelect = today.dailyMeals.find(obj => obj.toDay === req.body.selectDay)
    //     let measuresSelect = today.measures.find(obj => obj.toDay === req.body.selectDay)
    //         return res.render('home',{
    //             id: req.session._id,
    //             name: req.session.name,
    //             age: req.session.age,
    //             height: req.session.height,
    //             dailyMeals: dailyMealsSelect ? dailyMealsSelect : 'There is no information',
    //             measures: measuresSelect ? measuresSelect : 'There is no information'
    //         })
    // },
    forms:async(req,res)=>{
        if(req.session.login){
            let getMeasure = await Measure.findAll({limit:1, where:{userId:req.session._id}, order:[['createdAt','DESC']], raw:true})
            console.log(getMeasure)
            let getDailyMeal = await DailyMeal.findAll({limit:1, where:{userId:req.session._id}, order:[['createdAt','DESC']], raw:true})
            console.log(getDailyMeal)
            return res.render('forms',{
                name:req.session.name,
                id: req.session._id,
                age: req.session.age,
                height: req.session.height,
                dailyMeals:!getDailyMeal.leght ? null : getDailyMeal.leght[0],
                measures:!getMeasure.leght  ? null : getMeasure.leght[0]
            })
        }
        res.redirect('/')
    }
}
module.exports= myBodyControllers