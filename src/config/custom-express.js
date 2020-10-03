const bodyParser = require('body-parser')
const express = require('express')
const app = express()
const bodyParser = require('body-parser')

app.use(bodyParser.json())

app.use(bodyParser.json())
app.use(bodyParser.text())


module.exports = app