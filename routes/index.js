const express = require('express')
const router = express.Router()
const myBodyControllers = require('../controllers/myBodyControllers')

router.route('/')
.get(myBodyControllers.home)

router.route('/signup')
.get(myBodyControllers.signUp)

module.exports = router