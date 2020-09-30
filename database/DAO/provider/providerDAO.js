class ProviderDAO{
    
    constructor(db){
        this._db = db
    }

    getAllProvidersInDB(){
        return new Promise((resolve, reject) => {
            this._db.all(`SELECT * FROM provider`, [], (err, rows) => {
                if(err) reject(`Error in SELECT Query: ${err}`)
                resolve(rows)
            })
        })
    }

    getProviderInDB(id){
        return new Promise ((resolve, reject) => {
            this._db.get(`SELECT * FROM provider WHERE provider_id = ?`, [id], (err,row) =>{
                if(err) reject(`Error in SELECT Query ${err}`)
                resolve(row)
            })
        })
    }

    deleteProviderInDB(id){
        return new Promise((resolve, reject) => {
            this._db.run(`DELETE FROM client WHERE provider_id = ?`, [id], (err) => {
                if(err) reject(`Error in DELETE Query: ${err}`)
                resolve(`Provider deleted`)
            })
        })
    }

}

module.exports = ProviderDAO