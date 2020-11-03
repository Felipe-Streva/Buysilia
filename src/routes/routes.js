
const { first_name, last_name, email, password, cpf, name, company_name, cnpj, provider_id, evaluation, stock, price, client_id, product_id, url_client, url_product } = require('../config/validator/validator')

const ClientController = require('../controller/client/client')

const ProviderController = require('../controller/provider/provider')

const ProductController = require('../controller/product/product')

const PurchaseController = require('../controller/purchase/purchase') ;

const ClientPhotosController = require('../controller/clientPhotos/clientPhotos')

const ProductPhotosController = require('../controller/productPhotos/productPhotos')


module.exports = (app) => {

    //Client
    app.get(`/client`, ClientController.getAllClients())

    app.get(`/client/:id`, ClientController.getClient())

    app.post(`/client`, [first_name, last_name, email, password, cpf], ClientController.insertClient())

    app.put(`/client/:id`, [first_name, last_name, email, password, cpf], ClientController.modifyClient())

    app.delete(`/client/:id`, ClientController.deleteClient())

    // login/client

    app.post(`/login/client`, ClientController.checkLogin())

    //Client/Photos

    app.get(`/client/photos/:clientId`, ClientPhotosController.getClientPhoto())

    app.post(`/client/photos`,[client_id, url_client], ClientPhotosController.insertClientPhoto())

    app.delete(`/client/photos/:clientId`, ClientPhotosController.deleteClientPhoto())


    //Provider
    app.get(`/provider`, ProviderController.getAllProviders())

    app.get(`/provider/:id`, ProviderController.getProvider())

    app.post(`/provider`, [name, company_name, cnpj], ProviderController.insertProvider())

    app.put(`/provider/:id`, [name, company_name, cnpj], ProviderController.modifyProvider())

    app.delete(`/provider/:id`, ProviderController.deleteProvider())
    

    //login/provider

    app.post(`/login/provider`, ProviderController.checkLogin())


    //Product
    app.get(`/product`, ProductController.getAllProducts())

    app.get('/product/provider/:providerId', ProductController.getAllProductsByProvider());
  
    app.get('/product/:id', ProductController.getProduct());

    app.post(`/product`, [provider_id, evaluation, stock, price, name], ProductController.insertProduct())

    app.put(`/product/:id`, [provider_id, evaluation, stock, price, name], ProductController.modifyProduct())

    app.delete(`/product/:id`, ProductController.deleteProduct())

    //Product/Photos
    app.get(`/product/photos/:productId`, ProductPhotosController.getAllProductPhotos())

    app.post(`/product/photos`,[product_id, url_product], ProductPhotosController.insertProductPhoto())

    app.delete(`/product/photos/:productPhototId`, ProductPhotosController.deleteProductPhoto())

    app.delete(`/product/photos/all/:productId`, ProductPhotosController.deleteAllProductPhoto())


    //Purchase
    app.get(`/purchase`, PurchaseController.getAllPurchases())

    app.get(`/purchase/client/:clientId`, PurchaseController.getAllPurchasesByClient())

    app.get(`/purchase/product/:productId`, PurchaseController.getAllPurchasesByProduct())

    app.post(`/purchase`, [client_id, product_id ], PurchaseController.insertPurchase())

    app.delete(`/purchase/:id`, PurchaseController.deletePurchase())

}