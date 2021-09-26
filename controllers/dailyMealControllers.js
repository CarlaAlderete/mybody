const DailyMeal = require('../models/DailyMeal')

const dailyMealControllers={
    editDailyMeal:async(req,res)=>{
        const {today,breakfast,lunch,dinner,afternoonSnack,id}=req.body
        if(!id){
            try{
                await DailyMeal.create({
                    today,
                    breakfast,
                    lunch,
                    dinner,
                    afternoonSnack,
                    userId:req.params.id
                })
                res.redirect('/home')
            }catch(err){
                res.redirect('/forms')
            }
        }else{
            let exist = await DailyMeal.findOne({where:{today ,userId : req.params.id}})
                if(!exist){
                    try{
                        await DailyMeal.create({
                            today,
                            breakfast,
                            lunch,
                            dinner,
                            afternoonSnack,
                            userId:req.params.id
                        })
                        res.redirect('/home')
                    }catch(err){
                        res.redirect('/forms')
                    }
                }else{
                    try{
                        await DailyMeal.update(
                            { today,breakfast,lunch,dinner,afternoonSnack, userId:req.params.id},
                            {where: {today,userId:req.params.id}})
                        res.redirect('/home')
                    }catch(err){
                        res.redirect('/forms')
                    }
                }   
        }
    }   
}
module.exports= dailyMealControllers