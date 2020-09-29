class ClientDAO{
    
    constructor(db){
        this._db = db
    }

    getAllClientsInDB(){
        return new Promise((resolve, reject) => {
            this._db.all(`Select * FROM Client`, [], (err, rows) => {
                if(err) reject(`Error: ${err}`)
                resolve(rows)
            })
        })
    }

}

module.exports = ClientDAO