const db = require('../../../database/db')
const ClientDAO = require('../../../database/DAO/client/clientDAO')

const clientDAO = new ClientDAO(db)

class ClientModels{


    static getAllClients(){
        return clientDAO.getAllClientsInDB()
    }

}

module.exports = ClientModels