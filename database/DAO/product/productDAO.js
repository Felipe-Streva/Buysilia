class ProductDAO{
    
    constructor(db){
        this._db = db
    }

    getAllProductsInDB(){
        return new Promise((resolve, reject) => {
            this._db.all(`SELECT * FROM product`, [], (err, rows) => {
                if(err) reject(`Error in SELECT Query: ${err}`)
                resolve(rows)
            })
        })
    }

    getAllProductsByProviderInDB(id) {            
        return new Promise((resolve,reject) => {
          this._db.all(`SELECT * FROM product WHERE provider_id=?;`, [id], (err,rows) => {
            if (err) reject(`Error in SELECT Query: ${err}`);    
              resolve(rows);
          })
        })
      }

    getProductInDB(id) {
        return new Promise ((resolve, reject) => {
            this._db.all(`SELECT * FROM product WHERE product_id=?`, [id], (err,row) =>{
                if(err) reject(`Error in SELECT Query ${err}`)
                resolve(row)
            })
        })
    }

    insertProductInDB(body){
        return new Promise( (resolve, reject) => {
            const INSERT = `INSERT into Product (provider_id , name , evaluation, description , price , stock ) Values (?, ?, ?, ?, ?, ?)`
            const params = [body.provider_id, body.name, body.evaluation, body.description, body.price, body.stock]; 
            this._db.run(INSERT, params, (err) => {
                if(err) reject(`Error in INSERT Query: ${err}`)
                resolve(`Product inserted`)
            })
        })

    }

    modifyProductInDB(body, id) {
        return new Promise( (resolve, reject) => {
            const UPDATE = `
                UPDATE product SET
                    provider_id = ?, name = ?, evaluation = ?, description = ?, price = ?, stock = ?
                WHERE product_id = ?;
            `;
            const params = [body.provider_id, body.name, body.evaluation, body.description, body.price, body.stock, id]; 
            this._db.run(UPDATE, params, (err) => {
                if(err) reject(`Error in UPDATE Query: ${err}`)
                resolve(`Product modified`)
            })
        })
    }
    
}

module.exports = ProductDAO