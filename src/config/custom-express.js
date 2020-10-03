const express = require('express')
const app = express()
const bodyParser = require('body-parser')

app.use(bodyParser.json())


module.exports = app