const ClientController = require('../controller/client/client')



module.exports = (app) => {

    app.get(`/client`, ClientController.getAllClients())

    app.delete(`/client/:id`, ClientController.deleteClient())

}