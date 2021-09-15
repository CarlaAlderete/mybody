const express = require('express')
const router = express.Router()
const myBodyControllers = require('../controllers/myBodyControllers')

router.route('/')
.get(myBodyControllers.signUp)

router.route('/signin')
.get(myBodyControllers.signIn)

router.route('/home')
.get(myBodyControllers.home)

module.exports = router