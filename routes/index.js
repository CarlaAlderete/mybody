const express = require('express')
const { get } = require('mongoose')
const router = express.Router()
const myBodyControllers = require('../controllers/myBodyControllers')
const userControllers = require('../controllers/userControllers')

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

router.route('/forms')
.get(myBodyControllers.forms)

module.exports = router