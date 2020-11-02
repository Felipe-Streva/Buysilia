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

    getClientInDB(id){
        return new Promise ((resolve, reject) => {
            this._db.get(`SELECT * FROM client WHERE client_id = ?`, [id], (err,row) =>{
                if(err) reject(`Error in SELECT Query ${err}`)
                resolve(row)
            })
        })
    }

    insertClientInDB(body) {
        return new Promise( (resolve, reject) => {
            const INSERT = `
                INSERT INTO client (
                    first_name, last_name, email, password, cpf, phone, address
                ) VALUES (?, ?, ?, ?, ?, ?, ?);
            `;
            const params = [body.first_name, body.last_name, body.email, body.password, body.cpf, body.phone, body.address]; 
            this._db.run(INSERT, params, (err) => {
                if(err) reject(`Error in INSERT Query: ${err}`)
                resolve(`Client inserted`)
            })
        })
    }

    modifyClientInDB(body, id) {
        return new Promise( (resolve, reject) => {
            const UPDATE = `
                UPDATE client SET
                    first_name = ?, last_name = ?, email = ?, password = ?, cpf = ?, phone = ?, address = ?
                WHERE client_id = ?;
            `;
            const params = [body.first_name, body.last_name, body.email, body.password, body.cpf, body.phone, body.address, id]; 
            this._db.run(UPDATE, params, function(err){
                if(err) reject(`Error in UPDATE Query: ${err}`)
                if(this.changes==0) reject(`Nonexistent Client`)
                resolve(`Client modified`)
            })
        })
    }

    deleteClientInDB(id){
        return new Promise((resolve, reject) => {
            this._db.run(`DELETE FROM client WHERE client_id = ?`, [id], function (err) {

                if(err) reject(`Error in DELETE Query: ${err}`)
                if(this.changes==0) reject(`Nonexistent Client`)
                resolve(`Client deleted`)
            })
        })
    }

    getByEmailInDB(email){
        return new Promise ((resolve, reject) => {
            this._db.get(`SELECT * FROM client WHERE email = ?`, [email], (err,row) =>{
                if(err) reject(`Error in SELECT Query ${err}`)
                resolve(row)
            })
        })
    }

}

module.exports = ClientDAO