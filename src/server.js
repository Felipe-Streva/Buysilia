const app = require('./config/custom-express')
const routes = require('./routes/routes')


const port = process.env.PORT || 3333;

routes(app)


app.listen(port, () => console.log(`Server ON in http://localhost:${port}`))


module.exports = app
