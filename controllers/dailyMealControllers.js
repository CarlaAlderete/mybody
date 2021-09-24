const DailyMeal = require('../models/DailyMeal')

const dailyMealControllers={
    editDailyMeal:async(req,res)=>{
        if(!req.body._id){
           let exist = await DailyMeal.findOne({where:{createdAt:{
                [Op.like]: '%{$req.body.toDay}%'}
            }})
            if(!exist){
                await DailyMeal.
            }
        }
    }   
}
module.exports= dailyMealControllers


//                 let dayExist = await Day.findOne({userId:req.params.id})
//                 let {breakfast, lunch, afternoonSnack, dinner}=req.body
//                 if(!req.body._id && dayExist){
//                     try{
//                         await Day.findOneAndUpdate({userId:req.params.id}, {$push:{dailyMeals:{toDay:req.body.toDay, breakfast, lunch, afternoonSnack, dinner}}})
//                         res.redirect('/home')
//                     }catch(err){
//                         console.log(err.message)
//                         res.redirect('/forms')
//                     }
//                 }else if(!req.body._id && !dayExist){
//                     try{
//                         let newdailyMeals = new Day({userId:req.params.id, dailyMeals:{toDay:req.body.toDay, breakfast, lunch, afternoonSnack, dinner}})
//                         await newdailyMeals.save()
//                         res.redirect('/home')
//                     }catch(err){
//                         console.log(err.message)
//                         res.redirect('/forms')
//                     }
//                 }else{
//                     try{
//                         let dailyMealsEdit = await Day.findOne({'dailyMeals.toDay':req.body.toDay})
//                         if(dailyMealsEdit){
//                             await Day.findOneAndUpdate({'dailyMeals.toDay':req.body.toDay},{$set:{
//                                 'dailyMeals.$.breakfast':breakfast,
//                                 'dailyMeals.$.lunch':lunch,
//                                 'dailyMeals.$.afternoonSnack':afternoonSnack,
//                                 'dailyMeals.$.dinner': dinner
//                             }})
//                             res.redirect('/home')
//                         }else{
//                             await Day.findOneAndUpdate({userId:req.params.id},{$push:{dailyMeals:{...req.body}}})
//                             res.redirect('/home')
//                         }
//                     }catch(err){
//                         console.log(err.message)
//                         res.redirect('/forms')
//                     }
//                 }