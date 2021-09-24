const express = require('express')
const router = express.Router()
const myBodyControllers = require('../controllers/myBodyControllers')
const userControllers = require('../controllers/userControllers')
const dailyMealControllers = require('../controllers/dailyMealControllers')


router.route('/signup')
.get(myBodyControllers.signUp)
.post(userControllers.singUp)

router.route('/')
.get(myBodyControllers.signIn)
.post(userControllers.signUser)

router.route('/signout')
.get(userControllers.signout)

router.route('/home')
.get(myBodyControllers.home)
// .post(myBodyControllers.homeDay)

router.route('/forms')
.get(myBodyControllers.forms)

router.route('/dailyMeal/:id')
.post(dailyMealControllers.editDailyMeal)
// router.route('/user/:id')


module.exports = router