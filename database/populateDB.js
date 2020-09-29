const sqlite3 = require('sqlite3').verbose()
const db = new sqlite3.Database('./database/marketplace.db')



//Insert USER
/*db.serialize(()=>{
    const statement = db.prepare("INSERT into Client (first_name, last_name, email, `password`, cpf, phone, adress) Values (?, ?, ?, ?, ?, ?, ?)");
    statement.run('Dudu', 'Oliveira', 'dudu@gmail.com', 'Jaspion', '123456789', '12345678911425', 'Queimados, ponte preta')
    statement.finalize()
}) */