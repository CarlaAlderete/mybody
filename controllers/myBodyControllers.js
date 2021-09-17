const myBodyControllers = {
    signUp: (req, res)=>{
        res.render('signUp',{
            error: null
        })
    },
    signIn: (req,res)=>{
        res.render('index',{
            error: null
        })
    },
    home:(req,res)=>{
        if(req.session.login){
            console.log(req.session)
            return res.render('home',{
                id: req.session.id,
                name: req.session.name,
                age: req.session.age,
                height: req.session.height,
                day: req.session.day
            })
        }
        res.redirect('/')
    },
    forms:(req,res)=>{
        if(req.session.login){
            return res.render('forms',{
                id: req.session.id,
                name: req.session.name,
                age: req.session.age,
                height: req.session.height,
                day: req.session.day
            })
        }
        res.redirect('/')
    }
}
module.exports= myBodyControllers