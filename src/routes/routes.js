
const { first_name, last_name, email, password, cpf, name, company_name, cnpj, provider_id, evaluation, stock, price } = require('../config/validator/validator')

const ClientController = require('../controller/client/client')

const ProviderController = require('../controller/provider/provider')

const ProductController = require('../controller/product/product')


module.exports = (app) => {

    app.get(`/client`, ClientController.getAllClients())

    app.get(`/client/:id`, ClientController.getClient())

    app.post(`/client`, [first_name, last_name, email, password, cpf], ClientController.insertClient())

    app.put(`/client/:id`, [first_name, last_name, email, password, cpf], ClientController.modifyClient())

    app.delete(`/client/:id`, ClientController.deleteClient())

    app.get(`/provider`, ProviderController.getAllProviders())

    app.get(`/provider/:id`, ProviderController.getProvider())

    app.post(`/provider`, [name, company_name, cnpj], ProviderController.insertProvider())

    app.delete(`/provider/:id`, ProviderController.deleteProvider())

    app.get(`/product`, ProductController.getAllProducts())

    app.get('/product/provider/:providerId', ProductController.getAllProductsByProvider());
  
    app.get('/product/:id', ProductController.getProduct());

    app.post(`/product`, [provider_id, evaluation, stock, price, name], ProductController.insertProduct())

}