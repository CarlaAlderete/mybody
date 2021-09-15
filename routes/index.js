const express = require('express')
const router = express.Router()
const myBodyControllers = require('../controllers/myBodyControllers')
const userControllers = require('../controllers/userControllers')

router.route('/')
.get(myBodyControllers.signUp)
.post(userControllers.addUser)

router.route('/signin')
.get(myBodyControllers.signIn)

router.route('/home')
.get(myBodyControllers.home)

module.exports = router