class ProductPhotosDAO{
    
    constructor(db){
        this._db = db
    }

    getAllProductPhotosInDB(id){
        return new Promise((resolve, reject) => {
            this._db.all(`SELECT * FROM Product_photos WHERE product_id = ?`, [id], (err, rows) => {
                if(err) reject(`Error in SELECT Query: ${err}`)
                resolve(rows)
            })
        })
    }

    insertProductPhotoInDB(body) {
        return new Promise( (resolve, reject) => {
            const INSERT = `
                INSERT INTO Product_photos (
                    product_id, url_product
                ) VALUES (?, ?);
            `;
            const params = [body.product_id, body.url_product]; 
            this._db.run(INSERT, params, (err) => {
                if(err) reject(`Error in INSERT Query: ${err}`)
                resolve(`Product Photo inserted`)
            })
        })
    }

    deleteProductPhotoInDB(id){
        return new Promise((resolve, reject) => {
            this._db.run(`DELETE FROM Product_photos WHERE product_photos_id = ?`, [id], function (err) {

                if(err) reject(`Error in DELETE Query: ${err}`)
                if(this.changes==0) reject(`Nonexistent ProductPhoto`)
                resolve(`Product Photo deleted`)
            })
        })
    }

    deleteAllProductPhotoInDB(id){
        return new Promise((resolve, reject) => {
            this._db.run(`DELETE FROM Product_photos WHERE product_id = ?`, [id], function (err) {

                if(err) reject(`Error in DELETE Query: ${err}`)
                if(this.changes==0) reject(`Nonexistent Product`)
                resolve(`All Product Photo deleted`)
            })
        })
    }
}

module.exports = ProductPhotosDAO