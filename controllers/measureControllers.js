const {Op} = require("sequelize")
const Measure = require('../models/Measure')

const MeasureControllers={
    editMeasure:async(req,res)=>{
        console.log(req.body)
        const {today,weight,chest,hip,waist,rightThigh,leftThigh,upperArm,calf,id}=req.body
        if(!id){
            let newMeasure = await new Measure({
                weight,chest,hip,waist,rightThigh,leftThigh,upperArm,calf,today,
                userId:req.params.id
            })
            await newMeasure.save()
            console.log(newMeasure)
            res.redirect('/home')
        }else{
            let exist = await Measure.findOne({where:{
                today:{[Op.like]: `%${today}%`},
                userId : req.params.id
                }})
                if(!exist){
                    let newMeasure = await new Measure({
                        weight,chest,hip,waist,rightThigh,leftThigh,upperArm,calf,today,
                        userId:req.params.id
                    })
                    await newMeasure.save()
                    res.redirect('/home')
                }else{
                    await Measure.update(
                        { ...req.body, userId:req.params.id},
                        {where: {id}})
                    res.redirect('/home')
                }
            
        }
    }   
}
module.exports= MeasureControllers