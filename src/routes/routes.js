const { first_name, last_name, email, password, cpf } = require('../config/validator/validator')

const ClientController = require('../controller/client/client')

const ProviderController = require('../controller/provider/provider')



module.exports = (app) => {

    app.get(`/client`, ClientController.getAllClients())

    app.get(`/client/:id`, ClientController.getClient())

    app.post(`/client`, [first_name, last_name, email, password, cpf], ClientController.insertClient())

    app.delete(`/client/:id`, ClientController.deleteClient())

    app.get(`/provider`, ProviderController.getAllProviders())

    app.get(`/provider/:id`, ProviderController.getProvider())

    app.delete(`/provider/:id`, ProviderController.deleteProvider())

}