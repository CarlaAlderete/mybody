const Day = require('../models/Day')

const dayControllers={
    editDay:async(req,res)=>{
        switch(req.body.action){
            case 'measures':
                let dayExt = await Day.findOne({userId:req.params.id})
                let {toDay, weight, chest, hip, waist, rightThigh, leftThigh, upperArm, calf, _id}=req.body
                if(!req.body._id && dayExt){
                    try{
                        await Day.findOneAndUpdate({userId:req.params.id}, {$push:{measures:{toDay, weight, chest, hip, waist, rightThigh, leftThigh, upperArm, calf}}})
                        res.redirect('/home')
                    }catch(err){
                        console.log(err.message)
                        res.redirect('/forms')
                    }
                }else if(!req.body._id && !dayExt){
                    try{
                        let newMeasures = new Day({userId:req.params.id, measures:{toDay, weight, chest, hip, waist, rightThigh, leftThigh, upperArm, calf}})
                        await newMeasures.save()
                        res.redirect('/home')
                    }catch(err){
                        console.log(err.message)
                        res.redirect('/forms')
                    }
                }else{
                    try{
                        let measuresEdit = await Day.findOne({'measures.toDay':toDay})
                        if(measuresEdit){
                            await Day.findOneAndUpdate({'measures._id':_id},{$set:{
                                'measures.$.weight':weight,
                                'measures.$.chest':chest,
                                'measures.$.hip':hip,
                                'measures.$.waist':waist,
                                'measures.$.rightThigh': rightThigh,
                                'measures.$.leftThigh':leftThigh,
                                'measures.$.upperArm':upperArm,
                                'measures.$.calf':calf
                            }})
                            res.redirect('/home')
                        }else{
                            await Day.findOneAndUpdate({userId:req.params.id},{$push:{measures:{...req.body}}})
                            res.redirect('/home')
                        }
                    }catch(err){
                        console.log(err.message)
                        res.redirect('/forms')
                    }
                }
            break
            case 'dailyMeals':
                let dayExist = await Day.findOne({userId:req.params.id})
                let {breakfast, lunch, afternoonSnack, dinner}=req.body
                if(!req.body._id && dayExist){
                    try{
                        await Day.findOneAndUpdate({userId:req.params.id}, {$push:{dailyMeals:{toDay:req.body.toDay, breakfast, lunch, afternoonSnack, dinner}}})
                        res.redirect('/home')
                    }catch(err){
                        console.log(err.message)
                        res.redirect('/forms')
                    }
                }else if(!req.body._id && !dayExist){
                    try{
                        let newdailyMeals = new Day({userId:req.params.id, dailyMeals:{toDay:req.body.toDay, breakfast, lunch, afternoonSnack, dinner}})
                        await newdailyMeals.save()
                        res.redirect('/home')
                    }catch(err){
                        console.log(err.message)
                        res.redirect('/forms')
                    }
                }else{
                    try{
                        let dailyMealsEdit = await Day.findOne({'dailyMeals.toDay':req.body.toDay})
                        if(dailyMealsEdit){
                            await Day.findOneAndUpdate({'dailyMeals._id':req.body._id},{$set:{
                                'dailyMeals.$.breakfast':breakfast,
                                'dailyMeals.$.lunch':lunch,
                                'dailyMeals.$.afternoonSnack':afternoonSnack,
                                'dailyMeals.$.dinner': dinner
                            }})
                            res.redirect('/home')
                        }else{
                            await Day.findOneAndUpdate({userId:req.params.id},{$push:{dailyMeals:{...req.body}}})
                            res.redirect('/home')
                        }
                    }catch(err){
                        console.log(err.message)
                        res.redirect('/forms')
                    }
                }
        } 
    }
}
module.exports= dayControllers