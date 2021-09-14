const express = require('express')
const router = require('./routes/index')
const app= express()

app.use('/', router)
app.listen(4000, () => console.log('Server listening'))