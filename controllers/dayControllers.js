const Day = require('../models/Day')

const dayControllers={
    editDay:async(req,res)=>{
        if(!req.body._id){
            let {toDay, weight, chest, hip, waist, rightThigh, leftThigh, upperArm, calf}=req.body
            let newDay = new Day({userId:req.params.id, day:{toDay, weight, chest, hip, waist, rightThigh, leftThigh, upperArm, calf}})
            try{
                console.log(newDay)
                await newDay.save()
                res.redirect('/home')
            }catch(err){
                res.redirect('/forms')
            }
        }else{
            console.log(req.body)
            let {toDay, weight, chest, hip, waist, rightThigh, leftThigh, upperArm, calf,_id}=req.body
            try{
                let dayEdit = await Day.findOne({'day.toDay':toDay})
                if(dayEdit){
                    await Day.findOneAndUpdate({'day._id':_id},{$set:{
                        'day.$.weight':weight,
                        'day.$.chest':chest,
                        'day.$.hip':hip,
                        'day.$.waist':waist,
                        'day.$.rightThigh': rightThigh,
                        'day.$.leftThigh':leftThigh,
                        'day.$.upperArm':upperArm,
                        'day.$.calf':calf
                    }})
                    res.redirect('/home')
                }else{
                    await Day.findOneAndUpdate({userId:req.params.id},{$push:{day:{...req.body}}})
                    res.redirect('/home')
                }
            }catch(err){
                console.log(err)
            }

        }
        
    }
}
module.exports= dayControllers