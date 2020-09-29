/*const sqlite3 = require('sqlite3').verbose()
const db = new sqlite3.Database('database/marketplace.db')

db.serialize(()=>{
    db.run("CREATE TABLE if not exists `Product` (product_id integer primary key autoincrement, provider_id integer, name varchar(100), evaluation varchar(255), description varchar(255), price decimal(11,2), stock integer )");
    db.run("CREATE TABLE if not exists `Client` (client_id integer primary key autoincrement, first_name varchar(150), last_name varchar(200), email varchar(200), password varchar(50), cpf varchar(9), phone varchar(14), adress varchar(255) )");
    db.run("CREATE TABLE if not exists `Provider` (provider_id integer primary key autoincrement, name varchar(255), phone varchar(14), company_name varchar(255), cnpj varchar(11), adress varchar(255)  )");
    db.run("CREATE TABLE if not exists `Purchase` (purchase_id integer primary key autoincrement, client_id integer, product_id integer, date date)");
})*/