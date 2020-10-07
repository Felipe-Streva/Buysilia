const db = require('../../../database/db')
const ProductDAO = require('../../../database/DAO/product/productDAO')

const productDAO = new ProductDAO(db)

class ProductModels{


    static getAllProducts(){
        return productDAO.getAllProductsInDB()   
    }

    static getAllProductsByProvider(id){
        return productDAO.getAllProductsByProviderInDB(id)   
    }

    static getProduct(id){
        return productDAO.getProductInDB(id)   
    }

    static insertProduct(body){
        return productDAO.insertProductInDB(body)
    }

}

module.exports = ProductModels