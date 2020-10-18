
const sqlite3 = require('sqlite3').verbose()
const db = new sqlite3.Database('database/marketplace.db')

const getDateNow = new Date(Date.now())
const convertTimeZoneSaoPaulo = new Date(getDateNow.valueOf() - getDateNow.getTimezoneOffset() * 60000)
const transformDateToSQLITE = convertTimeZoneSaoPaulo.toISOString().replace("T", " ").replace("Z","")
const dateSqlite = transformDateToSQLITE.substring(0, transformDateToSQLITE.indexOf('.'))


db.serialize(()=>{
    db.run("CREATE TABLE if not exists `Client` (client_id integer primary key autoincrement, first_name varchar(150), last_name varchar(200), email varchar(200), password varchar(50), cpf varchar(11), phone varchar(14), address varchar(255) )");
    db.run("CREATE TABLE if not exists `Product` (product_id integer primary key autoincrement, provider_id integer, name varchar(100), evaluation integer, description varchar(255), price decimal(11,2), stock integer)");   
    db.run("CREATE TABLE if not exists `Provider` (provider_id integer primary key autoincrement, name varchar(255), phone varchar(14), company_name varchar(255), cnpj varchar(14), address varchar(255))");
    db.run("CREATE TABLE if not exists `Purchase` (purchase_id integer primary key autoincrement, client_id integer, product_id integer, date text)");

    db.serialize(()=>{
        const statement = db.prepare("INSERT into Client (first_name, last_name, email, `password`, cpf, phone, address) Values (?, ?, ?, ?, ?, ?, ?)");
        statement.run('Dudu', 'Oliveira', 'dudu@gmail.com', 'Jaspion', '12345678922', '12345678911425', 'Queimados, ponte preta')
        statement.finalize()
    })

    db.serialize(()=>{
        const statement = db.prepare("INSERT into Provider (name, phone, company_name, cnpj, address) Values (?, ?, ?, ?, ?)");
        statement.run('MAGALU', '2585258521', 'Magazine Luiza', '12345678901234', 'Sao paulo, capital')
        statement.finalize()
    })

    db.serialize(()=>{
        const statement = db.prepare("INSERT into Product (provider_id , name , evaluation, description , price , stock ) Values (?, ?, ?, ?, ?, ?)");
        statement.run(1, 'Nokia3000', 10, 'Tijolao', 150.99, 50)
        statement.finalize()
    })

    db.serialize(()=>{
        const statement = db.prepare("INSERT into Product (provider_id , name , evaluation, description , price , stock ) Values (?, ?, ?, ?, ?, ?)");
        statement.run(1, 'Fogão Brastemp', 9, 'Fogão bonitão, cheio de bocas', 999.99, 10)
        statement.finalize()
    })

    db.serialize(()=>{
        const statement = db.prepare("INSERT into Purchase (client_id , product_id, date) Values (?, ?, ?)");
        statement.run(1, 1, dateSqlite);
        statement.finalize()
        
    })

})








