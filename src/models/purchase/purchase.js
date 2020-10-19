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

}

module.exports = PurchaseModels
