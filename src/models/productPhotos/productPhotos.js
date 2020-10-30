const db = require('../../../database/db')
const ProductPhotosDAO = require('../../../database/DAO/productPhotos/productPhotosDAO')

const productPhotosDAO = new ProductPhotosDAO(db)

class ProductPhotosModels{

    static getAllProductPhotos(id){
        return productPhotosDAO.getAllProductPhotosInDB(id)   
    }

    static insertProductPhoto(body){
        return productPhotosDAO.insertProductPhotoInDB(body)
    }

    static deleteProductPhoto(id){
        return productPhotosDAO.deleteProductPhotoInDB(id)   
    }

    static deleteAllProductPhoto(id){
        return productPhotosDAO.deleteAllProductPhotoInDB(id)   
    }
}

module.exports = ProductPhotosModels