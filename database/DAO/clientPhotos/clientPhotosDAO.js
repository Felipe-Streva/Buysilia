class ClientPhotosDAO{
    
    constructor(db){
        this._db = db
    }

    getClientPhotoInDB(id){
        return new Promise((resolve, reject) => {
            this._db.get(`SELECT * FROM Client_photos Where client_id = ?`, [id], (err, row) => {
                if(err) reject(`Error in SELECT Query: ${err}`)
                resolve(row)
            })
        })
    }

    insertClientPhotoInDB(body) {
        return new Promise( (resolve, reject) => {
            const INSERT = `
                INSERT INTO Client_photos (
                    client_id, url_client
                ) VALUES (?, ?);
            `;
            const params = [body.client_id, body.url_client]; 
            this._db.run(INSERT, params, (err) => {
                if(err) reject(`Error in INSERT Query: ${err}`)
                resolve(`Client Photo inserted`)
            })
        })
    }

    deleteClientPhotoInDB(id){
        return new Promise((resolve, reject) => {
            this._db.run(`DELETE FROM Client_photos WHERE client_id = ?`, [id], function (err) {

                if(err) reject(`Error in DELETE Query: ${err}`)
                if(this.changes==0) reject(`Nonexistent Client`)
                resolve(`Client Photo deleted`)
            })
        })
    }
}

module.exports = ClientPhotosDAO