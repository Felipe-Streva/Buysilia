const { OneClient } = require('../controller/client/client')
const ClientController = require('../controller/client/client')



module.exports = (app) => {

    app.get(`/client`, ClientController.getAllClients())

    app.get(`/client/:id`, ClientController.getClient())

    app.delete(`/client/:id`, ClientController.deleteClient())

}