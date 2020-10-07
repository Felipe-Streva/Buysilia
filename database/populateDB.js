const sqlite3 = require('sqlite3').verbose()
const db = new sqlite3.Database('./database/marketplace.db')


/*
//Insert Client
db.serialize(()=>{
    const statement = db.prepare("INSERT into Client (first_name, last_name, email, `password`, cpf, phone, adress) Values (?, ?, ?, ?, ?, ?, ?)");
    statement.run('Dudu', 'Oliveira', 'dudu@gmail.com', 'Jaspion', '123456789', '12345678911425', 'Queimados, ponte preta')
    statement.finalize()
}) 

//Insert Provider
db.serialize(()=>{
    const statement = db.prepare("INSERT into Provider (name, phone, company_name, cnpj, adress) Values (?, ?, ?, ?, ?)");
    statement.run('MAGALU', '2585258521', 'Magazine Luiza', '11111111111', 'Sao paulo, capital')
    statement.finalize()
}) */


//Insert Product
// db.serialize(()=>{
//     const statement = db.prepare("INSERT into Product (provider_id , name , evaluation, description , price , stock ) Values (?, ?, ?, ?, ?, ?)");
//     statement.run(1, 'Nokia3000', 'Mediano', 'Tijolao', 150.99, 50)
//     statement.finalize()
// }) 