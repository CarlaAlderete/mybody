const {Op} = require("sequelize")
const Measure = require('../models/Measure')

const MeasureControllers={
    editMeasure:async(req,res)=>{
        const {today,weight,chest,hip,waist,rightThigh,leftThigh,upperArm,calf,id}=req.body
        if(!id){
            try{
                await Measure.create({
                    weight,chest,hip,waist,rightThigh,leftThigh,upperArm,calf,today,
                    userId:req.params.id
                })
                res.redirect('/home')
            }catch(err){
                res.redirect('/forms')
            }
        }else{
            let exist = await Measure.findOne({where:{today:{[Op.like]: `%${today}%`},userId : req.params.id}})
            if(!exist){
                try{
                    await Measure.create({
                        weight,chest,hip,waist,rightThigh,leftThigh,upperArm,calf,today,
                        userId:req.params.id
                    })
                    res.redirect('/home')
                }catch(err){
                    res.redirect('/forms')
                }
             }else{
                try{
                    await Measure.update(
                        {weight,chest,hip,waist,rightThigh,leftThigh,upperArm,calf, userId: req.params.id},
                        {where: {today, userId: req.params.id}})
                    res.redirect('/home')
                }catch(err){
                    console.log(err.message)
                    res.redirect('/forms')
                }
            }
        }
    }   
}
module.exports= MeasureControllers