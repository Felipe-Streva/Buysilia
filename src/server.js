const app = require('./config/custom-express')
const routes = require('./routes/routes')

const port = process.env.PORT || 3000;

routes(app)

app.listen(port, () => console.log('Server ON'))