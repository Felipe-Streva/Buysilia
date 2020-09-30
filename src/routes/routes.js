const { OneClient } = require('../controller/client/client')
const ClientController = require('../controller/client/client')

const { Provider } = require('../controller/provider/provider')
const ProviderController = require('../controller/provider/provider')


module.exports = (app) => {

    app.get(`/client`, ClientController.getAllClients())

    app.get(`/client/:id`, ClientController.getClient())

    app.delete(`/client/:id`, ClientController.deleteClient())

    app.get(`/provider`, ProviderController.getAllProviders())

    app.get(`/provider/:id`, ProviderController.getProvider())

    app.delete(`/provider/:id`, ProviderController.deleteProvider())

}