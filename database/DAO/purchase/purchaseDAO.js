class PurchaseDAO{
    
    constructor(db){
        this._db = db
    }

    getAllPurchasesInDB(){
        return new Promise((resolve, reject) => {
            this._db.all(`SELECT * FROM Purchase`, [], (err, rows) => {
                if(err) reject(`Error in SELECT Query: ${err}`)
                resolve(rows)
            })
        })
    }

    getAllPurchasesByClientInDB(id){
        return new Promise ((resolve, reject) => {
            this._db.all(`SELECT * FROM Purchase WHERE client_id = ?`, [id], (err,rows) =>{
                if(err) reject(`Error in SELECT Query ${err}`)
                resolve(rows)
            })
        })
    }

    getAllPurchasesByProductInDB(id){
        return new Promise ((resolve, reject) => {
            this._db.all(`SELECT * FROM Purchase WHERE product_id = ?`, [id], (err,rows) =>{
                if(err) reject(`Error in SELECT Query ${err}`)
                resolve(rows)
            })
        })
    }

    deletePurchaseInDB(id){
        return new Promise((resolve, reject) => {
            this._db.run(`DELETE FROM Purchase WHERE purchase_id = ?`, [id], (err) => {
                if(err) reject(`Error in DELETE Query: ${err}`)
                resolve(`Purchase deleted`)
            })
        })
    }
}

module.exports = PurchaseDAO