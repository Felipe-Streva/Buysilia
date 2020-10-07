const ClientController = require('../controller/client/client')
const ProductController = require('../controller/product/product')

module.exports = (app) => {

    app.get(`/client`, ClientController.getAllClients())

    app.get(`/client/:id`, ClientController.getClient())

    app.delete(`/client/:id`, ClientController.deleteClient())

    app.get(`/product`, ProductController.getAllProducts())

    app.get('/product/product/provider/:id', ProductController.getAllProductOneProviderInDB());
  
    app.get('/product/product/provider/:id', ProductController.getProductOneProviderInDB());

}