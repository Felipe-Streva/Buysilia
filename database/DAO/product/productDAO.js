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

    getAllProductOneProviderInDB(id) {            
        return new Promise((resolve,reject) => {
          this._db.all(`SELECT * FROM product WHERE provider_id=?;`, [id], (err,res) => {
            if (err) reject(`Error in SELECT Query: ${err}`);    
              resolve(res);
          })
        })
      }

    getProductOneProviderInDB(id) {
        return new Promise ((resolve, reject) => {
            this._db.get(`SELECT * FROM product WHERE provider_id=?`, [id], (err,row) =>{
                if(err) reject(`Error in SELECT Query ${err}`)
                resolve(row)
            })
        })
    }
    
}

module.exports = ProductDAO