const myBodyControllers ={
    signUp: (req, res)=>{
        res.render('index',{
            error: null
        })
    },
    signIn: (req,res)=>{
        res.render('signIn',{
            error: null
        })
    },
    home: (req,res)=>{
        res.render('home')
    }
}
module.exports = myBodyControllers