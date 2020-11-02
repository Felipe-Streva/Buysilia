const bodyParser = require('body-parser')
const express = require('express')
const app = express()
const cors = require('cors')

app.use(bodyParser.json())
app.use(bodyParser.urlencoded())
app.use(cors())


module.exports = app