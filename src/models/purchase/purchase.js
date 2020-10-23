const db = require('../../../database/db')
const PurchaseDAO = require('../../../database/DAO/purchase/purchaseDAO')

const purchaseDAO = new PurchaseDAO(db)

class PurchaseModels{

    static getAllPurchases(){
        return purchaseDAO.getAllPurchasesInDB()
    }

    static getAllPurchasesByClient(id){
        return purchaseDAO.getAllPurchasesByClientInDB(id)
    }

    static getAllPurchasesByProduct(id){
        return purchaseDAO.getAllPurchasesByProductInDB(id)
    }

    static insertPurchase(body, stock) {
        stock--
        return purchaseDAO.insertPurchaseInDB(body, stock)
    }

    static deletePurchase(id, stock, product_id){
        stock++
        return purchaseDAO.deletePurchaseInDB(id, stock, product_id)
    }

    static getPurchase(id){
        return purchaseDAO.getPurchaseInDB(id)
    }

}

module.exports = PurchaseModels
