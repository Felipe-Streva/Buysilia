class ClientDAO{
    
    constructor(db){
        this._db = db
    }

    getAllClientsInDB(){
        return new Promise((resolve, reject) => {
            this._db.all(`SELECT * FROM client`, [], (err, rows) => {
                if(err) reject(`Error in SELECT Query: ${err}`)
                resolve(rows)
            })
        })
    }

    deleteClientInDB(id){
        return new Promise((resolve, reject) => {
            this._db.run(`DELETE FROM client WHERE client_id = ?`, [id], (err) => {
                if(err) reject(`Error in DELETE Query: ${err}`)
                resolve(`Client deleted`)
            })
        })
    }

}

module.exports = ClientDAO