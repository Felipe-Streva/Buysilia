// deletar o banco antes de subir para o git
// rodar o banco antes de trabalhar

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
    db.run("CREATE TABLE if not exists `Product_photos` (product_photos_id integer primary key autoincrement, product_id integer, url_product text)");
    db.run("CREATE TABLE if not exists `Client_photos` (client_photos_id integer primary key autoincrement, client_id integer, url_client text)");

    db.serialize(()=>{
        const statement = db.prepare("INSERT into Client (first_name, last_name, email, `password`, cpf, phone, address) Values (?, ?, ?, ?, ?, ?, ?)");
        statement.run('Dudu', 'Oliveira', 'dudu@gmail.com', '$2b$10$Ea0FB7N4ZaiQkLdSxn5N8OrIrmWkA5gOcKTMncqDpMWiRtPP.zM1O', '12345678922', '12345678911425', 'Queimados, ponte preta')
        statement.finalize()
    })

    db.serialize(()=>{
        const statement = db.prepare("INSERT into Client_photos (client_id, url_client) Values (?, ?)");
        statement.run(1, 'https://images.unsplash.com/photo-1603764377193-75b991876878?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=634&q=80')
        statement.finalize()
    })

    db.serialize(()=>{
        const statement = db.prepare("INSERT into Client (first_name, last_name, email, `password`, cpf, phone, address) Values (?, ?, ?, ?, ?, ?, ?)");
        statement.run('Lipe', 'Nunes', 'lipe@gmail.com', '$2b$10$Ea0FB7N4ZaiQkLdSxn5N8OrIrmWkA5gOcKTMncqDpMWiRtPP.zM1O', '11548526451', '12345678911333', 'Rio, Tijuca')
        statement.finalize()
    })

    db.serialize(()=>{
        const statement = db.prepare("INSERT into Client_photos (client_id, url_client) Values (?, ?)");
        statement.run(2, 'https://images.unsplash.com/photo-1579272429483-d6bf1b070d1f?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=385&q=80')
        statement.finalize()
    })

    db.serialize(()=>{
        const statement = db.prepare("INSERT into Client (first_name, last_name, email, `password`, cpf, phone, address) Values (?, ?, ?, ?, ?, ?, ?)");
        statement.run('Vic', 'Rainha', 'queen@gmail.com', '$2b$10$Ea0FB7N4ZaiQkLdSxn5N8OrIrmWkA5gOcKTMncqDpMWiRtPP.zM1O', '12345678978', '55545678911425', 'Rio, Rocinha')
        statement.finalize()
    })

    db.serialize(()=>{
        const statement = db.prepare("INSERT into Client_photos (client_id, url_client) Values (?, ?)");
        statement.run(3, 'https://images.unsplash.com/photo-1602976871731-5ddd72ac13b2?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=80')
        statement.finalize()
    })

    db.serialize(()=>{
        const statement = db.prepare("INSERT into Client (first_name, last_name, email, `password`, cpf, phone, address) Values (?, ?, ?, ?, ?, ?, ?)");
        statement.run('Ivan', 'Vovô', 'ivan@gmail.com', '$2b$10$Ea0FB7N4ZaiQkLdSxn5N8OrIrmWkA5gOcKTMncqDpMWiRtPP.zM1O', '12355578922', '12349515911425', 'Fim do mundo')
        statement.finalize()
    })

    db.serialize(()=>{
        const statement = db.prepare("INSERT into Client_photos (client_id, url_client) Values (?, ?)");
        statement.run(4, 'https://images.unsplash.com/photo-1596493688293-40dd1c5fa74d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=329&q=80')
        statement.finalize()
    })

    db.serialize(()=>{
        const statement = db.prepare("INSERT into Client (first_name, last_name, email, `password`, cpf, phone, address) Values (?, ?, ?, ?, ?, ?, ?)");
        statement.run('Jorge', 'Dicas', 'dicas@youtube.com', '$2b$10$Ea0FB7N4ZaiQkLdSxn5N8OrIrmWkA5gOcKTMncqDpMWiRtPP.zM1O', '12375378922', '12345951546425', 'Rio, Tijuca')
        statement.finalize()
    })

    db.serialize(()=>{
        const statement = db.prepare("INSERT into Client_photos (client_id, url_client) Values (?, ?)");
        statement.run(5, 'https://images.unsplash.com/photo-1594751684241-bcef815d5a57?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=334&q=80')
        statement.finalize()
    })

    db.serialize(()=>{
        const statement = db.prepare("INSERT into Client (first_name, last_name, email, `password`, cpf, phone, address) Values (?, ?, ?, ?, ?, ?, ?)");
        statement.run('Pedro', 'Silva', 'silva@gmail.com', '$2b$10$Ea0FB7N4ZaiQkLdSxn5N8OrIrmWkA5gOcKTMncqDpMWiRtPP.zM1O', '15243567852', '54257854201215', 'Rio, Lapa')
        statement.finalize()
    })

    db.serialize(()=>{
        const statement = db.prepare("INSERT into Client_photos (client_id, url_client) Values (?, ?)");
        statement.run(6, 'https://images.unsplash.com/photo-1602520658109-9c3cdbd38a0e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=334&q=80')
        statement.finalize()
    })

    db.serialize(()=>{
        const statement = db.prepare("INSERT into Client (first_name, last_name, email, `password`, cpf, phone, address) Values (?, ?, ?, ?, ?, ?, ?)");
        statement.run('Ana', 'Oliveira', 'ana@gmail.com', '$2b$10$Ea0FB7N4ZaiQkLdSxn5N8OrIrmWkA5gOcKTMncqDpMWiRtPP.zM1O', '12345852922', '12345662545325', 'Queimados, ponte preta')
        statement.finalize()
    })

    db.serialize(()=>{
        const statement = db.prepare("INSERT into Client_photos (client_id, url_client) Values (?, ?)");
        statement.run(7, 'https://images.unsplash.com/photo-1591852072703-f227c1a09aee?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=375&q=80')
        statement.finalize()
    })

    db.serialize(()=>{
        const statement = db.prepare("INSERT into Client (first_name, last_name, email, `password`, cpf, phone, address) Values (?, ?, ?, ?, ?, ?, ?)");
        statement.run('Mônica', 'Nunes', 'momo@youtube.com', '$2b$10$Ea0FB7N4ZaiQkLdSxn5N8OrIrmWkA5gOcKTMncqDpMWiRtPP.zM1O', '15525789225', '12347535811425', 'Rio, Leblon')
        statement.finalize()
    })

    db.serialize(()=>{
        const statement = db.prepare("INSERT into Client_photos (client_id, url_client) Values (?, ?)");
        statement.run(8, 'https://images.unsplash.com/photo-1603772655636-f4cc96a74ad9?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=334&q=80')
        statement.finalize()
    })


    db.serialize(()=>{
        const statement = db.prepare("INSERT into Client (first_name, last_name, email, `password`, cpf, phone, address) Values (?, ?, ?, ?, ?, ?, ?)");
        statement.run('Duda', 'Dominos', 'dominos@gmail.com', '$2b$10$Ea0FB7N4ZaiQkLdSxn5N8OrIrmWkA5gOcKTMncqDpMWiRtPP.zM1O', '12345677892', '22225678911425', 'Rio, Meier')
        statement.finalize()
    })

    db.serialize(()=>{
        const statement = db.prepare("INSERT into Client_photos (client_id, url_client) Values (?, ?)");
        statement.run(9, 'https://images.unsplash.com/photo-1603610515737-193e0b423983?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=750&q=80')
        statement.finalize()
    })


    db.serialize(()=>{
        const statement = db.prepare("INSERT into Client (first_name, last_name, email, `password`, cpf, phone, address) Values (?, ?, ?, ?, ?, ?, ?)");
        statement.run('Jarom', 'Ai...', 'jaja@gmail.com', '$2b$10$Ea0FB7N4ZaiQkLdSxn5N8OrIrmWkA5gOcKTMncqDpMWiRtPP.zM1O', '12347586922', '12349999911425', 'Nikit, longe')
        statement.finalize()
    })

    db.serialize(()=>{
        const statement = db.prepare("INSERT into Client_photos (client_id, url_client) Values (?, ?)");
        statement.run(10, 'https://images.unsplash.com/photo-1603384699007-50799748fc45?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=334&q=80')
        statement.finalize()
    })

    db.serialize(()=>{
        const statement = db.prepare("INSERT into Provider (name, phone, company_name, cnpj, address) Values (?, ?, ?, ?, ?)");
        statement.run('MAGALU', '2585258521', 'Magazine Luiza', '12345678901234', 'Sao paulo, capital')
        statement.finalize()
    })

    db.serialize(()=>{
        const statement = db.prepare("INSERT into Provider (name, phone, company_name, cnpj, address) Values (?, ?, ?, ?, ?)");
        statement.run('AMBEV', '2585595521', 'AMBEV/INBEV', '12345677777234', 'Rio de Janeiro, capital')
        statement.finalize()
    })

    db.serialize(()=>{
        const statement = db.prepare("INSERT into Provider (name, phone, company_name, cnpj, address) Values (?, ?, ?, ?, ?)");
        statement.run('Brastemp', '2585286241', 'BRASTEMP', '12374852901234', 'Sao paulo, capital')
        statement.finalize()
    })

    db.serialize(()=>{
        const statement = db.prepare("INSERT into Provider (name, phone, company_name, cnpj, address) Values (?, ?, ?, ?, ?)");
        statement.run('Nokia', '2587777721', 'NOKIA', '00555678901234', 'Sao paulo, capital')
        statement.finalize()
    })

    db.serialize(()=>{
        const statement = db.prepare("INSERT into Provider (name, phone, company_name, cnpj, address) Values (?, ?, ?, ?, ?)");
        statement.run('SAMSUNG', '2577778521', 'SAMSUNG', '75358678901234', 'Rio de Janeiro, capital')
        statement.finalize()
    })

    db.serialize(()=>{
        const statement = db.prepare("INSERT into Product (provider_id , name , evaluation, description , price , stock ) Values (?, ?, ?, ?, ?, ?)");
        statement.run(4, 'Nokia3000', 10, 'Tijolao', 150.99, 50)
        statement.finalize()
    })

    db.serialize(()=>{
        const statement = db.prepare("INSERT into Product_photos (product_id, url_product) Values (?, ?)");
        statement.run(1, 'https://images.unsplash.com/photo-1559312379-6eff3ba65888?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=750&q=80')
        statement.finalize()
    })

    db.serialize(()=>{
        const statement = db.prepare("INSERT into Product (provider_id , name , evaluation, description , price , stock ) Values (?, ?, ?, ?, ?, ?)");
        statement.run(3, 'Fogão Brastemp', 9, 'Fogão bonitão, cheio de bocas', 999.99, 10)
        statement.finalize()
    })

    db.serialize(()=>{
        const statement = db.prepare("INSERT into Product_photos (product_id, url_product) Values (?, ?)");
        statement.run(2, 'https://images.unsplash.com/photo-1527195575508-5b138d14a35b?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=751&q=80')
        statement.finalize()
    })

    db.serialize(()=>{
        const statement = db.prepare("INSERT into Product (provider_id , name , evaluation, description , price , stock ) Values (?, ?, ?, ?, ?, ?)");
        statement.run(1, 'Fogão Brastemp', 9, 'Fogão bonitão, cheio de bocas', 799.99, 20)
        statement.finalize()
    })

    db.serialize(()=>{
        const statement = db.prepare("INSERT into Product_photos (product_id, url_product) Values (?, ?)");
        statement.run(3, 'https://images.unsplash.com/photo-1578845425669-b6562f83b11e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=334&q=80')
        statement.finalize()
    })

    db.serialize(()=>{
        const statement = db.prepare("INSERT into Product (provider_id , name , evaluation, description , price , stock ) Values (?, ?, ?, ?, ?, ?)");
        statement.run(1, 'LapTop Acer', 9, 'Laptop de burguês', 2799.99, 5)
        statement.finalize()
    })

    db.serialize(()=>{
        const statement = db.prepare("INSERT into Product_photos (product_id, url_product) Values (?, ?)");
        statement.run(4, 'https://images.unsplash.com/photo-1588702547923-7093a6c3ba33?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=750&q=80')
        statement.finalize()
    })

    db.serialize(()=>{
        const statement = db.prepare("INSERT into Product (provider_id , name , evaluation, description , price , stock ) Values (?, ?, ?, ?, ?, ?)");
        statement.run(2, 'Cerveja Original', 10, 'Pack com 12 garrafas de original', 50.00, 120)
        statement.finalize()
    })

    db.serialize(()=>{
        const statement = db.prepare("INSERT into Product_photos (product_id, url_product) Values (?, ?)");
        statement.run(5, 'https://images.unsplash.com/photo-1559818454-1b46997bfe30?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=334&q=80')
        statement.finalize()
    })

    db.serialize(()=>{
        const statement = db.prepare("INSERT into Product (provider_id , name , evaluation, description , price , stock ) Values (?, ?, ?, ?, ?, ?)");
        statement.run(5, 'SAMSUNG GALAXY', 8, 'Celular top', 799.99, 50)
        statement.finalize()
    })

    db.serialize(()=>{
        const statement = db.prepare("INSERT into Product_photos (product_id, url_product) Values (?, ?)");
        statement.run(6, 'https://images.unsplash.com/photo-1555774698-0b77e0d5fac6?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=750&q=80')
        statement.finalize()
    })

    db.serialize(()=>{
        const statement = db.prepare("INSERT into Product_photos (product_id, url_product) Values (?, ?)");
        statement.run(6, 'https://images.unsplash.com/photo-1591122947157-26bad3a117d2?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=80')
        statement.finalize()
    })

    db.serialize(()=>{
        const statement = db.prepare("INSERT into Product_photos (product_id, url_product) Values (?, ?)");
        statement.run(6, 'https://images.unsplash.com/photo-1529163835670-f5e2159a34a0?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1453&q=80')
        statement.finalize()
    })

    db.serialize(()=>{
        const statement = db.prepare("INSERT into Purchase (client_id , product_id, date) Values (?, ?, ?)");
        statement.run(1, 1, dateSqlite);
        statement.finalize()
        
    })

    db.serialize(()=>{
        const statement = db.prepare("INSERT into Purchase (client_id , product_id, date) Values (?, ?, ?)");
        statement.run(8, 2, dateSqlite);
        statement.finalize()
        
    })

    db.serialize(()=>{
        const statement = db.prepare("INSERT into Purchase (client_id , product_id, date) Values (?, ?, ?)");
        statement.run(8, 4, dateSqlite);
        statement.finalize()
        
    })

    db.serialize(()=>{
        const statement = db.prepare("INSERT into Purchase (client_id , product_id, date) Values (?, ?, ?)");
        statement.run(4, 2, dateSqlite);
        statement.finalize()
        
    })

    db.serialize(()=>{
        const statement = db.prepare("INSERT into Purchase (client_id , product_id, date) Values (?, ?, ?)");
        statement.run(4, 1, dateSqlite);
        statement.finalize()
        
    })

    db.serialize(()=>{
        const statement = db.prepare("INSERT into Purchase (client_id , product_id, date) Values (?, ?, ?)");
        statement.run(1, 4, dateSqlite);
        statement.finalize()
        
    })

    db.serialize(()=>{
        const statement = db.prepare("INSERT into Purchase (client_id , product_id, date) Values (?, ?, ?)");
        statement.run(2, 3, dateSqlite);
        statement.finalize()
        
    })

    db.serialize(()=>{
        const statement = db.prepare("INSERT into Purchase (client_id , product_id, date) Values (?, ?, ?)");
        statement.run(3, 1, dateSqlite);
        statement.finalize()
        
    })

    db.serialize(()=>{
        const statement = db.prepare("INSERT into Purchase (client_id , product_id, date) Values (?, ?, ?)");
        statement.run(2, 3, dateSqlite);
        statement.finalize()
        
    })

    db.serialize(()=>{
        const statement = db.prepare("INSERT into Purchase (client_id , product_id, date) Values (?, ?, ?)");
        statement.run(9, 3, dateSqlite);
        statement.finalize()
        
    })

    db.serialize(()=>{
        const statement = db.prepare("INSERT into Purchase (client_id , product_id, date) Values (?, ?, ?)");
        statement.run(6, 1, dateSqlite);
        statement.finalize()
        
    })

})








