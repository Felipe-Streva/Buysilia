class ClientDAO{
    
    constructor(db){
        this._db = db
    }

    getAllClientsInDB(){
        return new Promise((resolve, reject) => {
            this._db.all(`SELECT * FROM client`, [], (err, rows) => {
                if(err) reject(`Error in the query: ${err}`)
                resolve(rows)
            })
        })
    }

}

module.exports = ClientDAO