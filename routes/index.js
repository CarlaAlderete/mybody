const express = require('express')
const { get } = require('mongoose')
const router = express.Router()
const myBodyControllers = require('../controllers/myBodyControllers')
const userControllers = require('../controllers/userControllers')
const dayControllers = require('../controllers/dayControllers')

router.route('/signup')
.get(myBodyControllers.signUp)
.post(userControllers.addUser)

router.route('/')
.get(myBodyControllers.signIn)
.post(userControllers.signUser)

router.route('/signout')
.get(userControllers.signout)

router.route('/home')
.get(myBodyControllers.home)
.post(myBodyControllers.homeDay)

router.route('/forms')
.get(myBodyControllers.forms)

router.route('/day/:id')
.post(dayControllers.editDay)

router.route('/user/:id')
.get(userControllers.deleteUser)
.post(userControllers.editUser)

module.exports = router