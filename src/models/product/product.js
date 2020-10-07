const db = require('../../../database/db')
const ProductDAO = require('../../../database/DAO/product/productDAO')

const productDAO = new ProductDAO(db)

class ProductModels{


    static getAllProductsInDB(){
        return productDAO.getAllProductsInDB()   
    }

    static getAllProductOneProviderInDB(id){
        return productDAO.getAllProductOneProviderInDB(id)   
    }

    static getProductOneProviderInDB(id){
        return productDAO.getProductOneProviderInDB(id)   
    }

}

module.exports = ProductModels