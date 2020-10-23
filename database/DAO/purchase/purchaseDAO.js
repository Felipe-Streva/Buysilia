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

    insertPurchaseInDB(body, stock) {
        return new Promise( (resolve, reject) => {
            const getDateNow = new Date(Date.now())
            const convertTimeZoneSaoPaulo = new Date(getDateNow.valueOf() - getDateNow.getTimezoneOffset() * 60000)
            const transformDateToSQLITE = convertTimeZoneSaoPaulo.toISOString().replace("T", " ").replace("Z","")
            const dateSqlite = transformDateToSQLITE.substring(0, transformDateToSQLITE.indexOf('.'))


            
            const Query = `BEGIN TRANSACTION;
                                INSERT INTO Purchase (
                                    client_id, product_id, date
                                ) VALUES (${body.client_id}, ${body.product_id},'${dateSqlite}');

                                UPDATE Product SET
                                    stock = ${stock}
                                WHERE 
                                    product_id = ${body.product_id};

                                COMMIT;

            `;

            this._db.exec(Query, (err) => {
                if(err) reject(`Error in INSERT Query: ${err}`)
                resolve(`Purchase inserted`)
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