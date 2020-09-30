const db = require('../../../database/db')
const ClientDAO = require('../../../database/DAO/client/clientDAO')

const clientDAO = new ClientDAO(db)

class ClientModels{


    static getAllClients(){
        return clientDAO.getAllClientsInDB()   
    }

    static deleteClient(id){
        return clientDAO.deleteClientInDB(id)
    }

}

module.exports = ClientModels