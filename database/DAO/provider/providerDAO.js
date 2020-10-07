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

    insertProviderInDB(body) {
        return new Promise( (resolve, reject) => {
            const INSERT = `
                INSERT INTO provider (
                    name, phone, company_name, cnpj, adress
                ) VALUES (?, ?, ?, ?, ?);
            `;
            const params = [body.name, body.phone, body.company_name, body.cnpj, body.adress]; 
            this._db.run(INSERT, params, (err) => {
                if(err) reject(`Error in INSERT Query: ${err}`)
                resolve(`Provider inserted`)
            })
        })
    }

    modifyProviderInDB(body, id) {
        return new Promise( (resolve, reject) => {
            const UPDATE = `
                UPDATE provider SET
                    name = ?, phone = ?, company_name = ?, cnpj = ?, adress = ?
                WHERE provider_id = ?;
            `;
            const params = [body.name, body.phone, body.company_name, body.cnpj, body.adress, id]; 
            this._db.run(UPDATE, params, (err) => {
                if(err) reject(`Error in UPDATE Query: ${err}`)
                resolve(`Provider modified`)
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