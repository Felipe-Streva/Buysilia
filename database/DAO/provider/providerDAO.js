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
                    name, phone, company_name, cnpj, address
                ) VALUES (?, ?, ?, ?, ?);
            `;
            const params = [body.name, body.phone, body.company_name, body.cnpj, body.address]; 
            this._db.run(INSERT, params, function(err){
                if(err) reject(`Error in INSERT Query: ${err}`)
                resolve(this.lastID)
            })
        })
    }

    modifyProviderInDB(body, id) {
        return new Promise( (resolve, reject) => {
            const UPDATE = `
                UPDATE provider SET
                    name = ?, phone = ?, company_name = ?, cnpj = ?, address = ?
                WHERE provider_id = ?;
            `;
            const params = [body.name, body.phone, body.company_name, body.cnpj, body.address, id]; 
            this._db.run(UPDATE, params, function(err){
                if(err) reject(`Error in UPDATE Query: ${err}`)
                if(this.changes==0) reject(`Nonexistent Provider`)
                resolve(`Provider modified`)
            })
        })
    }

    deleteProviderInDB(id){
        return new Promise((resolve, reject) => {
            this._db.run(`DELETE FROM provider WHERE provider_id = ?`, [id], function(err){
                if(err) reject(`Error in DELETE Query: ${err}`)
                if(this.changes==0) reject(`Nonexistent Provider`)
                resolve(`Provider deleted`)
            })
        })
    }

    getProviderByCNPJInDB(cnpj){
        return new Promise ((resolve, reject) => {
            this._db.get(`SELECT * FROM provider WHERE cnpj = ?`, [cnpj], (err,row) =>{
                if(err) reject(`Error in SELECT Query ${err}`)
                resolve(row)
            })
        })
    }

}

module.exports = ProviderDAO