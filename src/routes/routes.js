
const { first_name, last_name, email, password, cpf, name, company_name, cnpj, provider_id, evaluation, stock, price, id } = require('../config/validator/validator')

const ClientController = require('../controller/client/client')

const ProviderController = require('../controller/provider/provider')

const ProductController = require('../controller/product/product')

const PurchaseController = require('../controller/purchase/purchase') ;


module.exports = (app) => {

    //Client
    app.get(`/client`, ClientController.getAllClients())

    app.get(`/client/:id`, ClientController.getClient())

    app.post(`/client`, [first_name, last_name, email, password, cpf], ClientController.insertClient())

    app.put(`/client/:id`, [first_name, last_name, email, password, cpf], ClientController.modifyClient())

    app.delete(`/client/:id`, ClientController.deleteClient())


    //Provider
    app.get(`/provider`, ProviderController.getAllProviders())

    app.get(`/provider/:id`, ProviderController.getProvider())

    app.post(`/provider`, [name, company_name, cnpj], ProviderController.insertProvider())

    app.put(`/provider/:id`, [name, company_name, cnpj], ProviderController.modifyProvider())

    app.delete(`/provider/:id`, ProviderController.deleteProvider())


    //Product
    app.get(`/product`, ProductController.getAllProducts())

    app.get('/product/provider/:providerId', ProductController.getAllProductsByProvider());
  
    app.get('/product/:id', ProductController.getProduct());

    app.post(`/product`, [provider_id, evaluation, stock, price, name], ProductController.insertProduct())

    app.put(`/product/:id`, [provider_id, evaluation, stock, price, name], ProductController.modifyProduct())


    //Purchase
    app.get(`/purchase`, PurchaseController.getAllPurchases())

    app.get(`/purchase/client/:clientId`, PurchaseController.getAllPurchasesByClient())

    app.get(`/purchase/product/:productId`, PurchaseController.getAllPurchasesByProduct())

}