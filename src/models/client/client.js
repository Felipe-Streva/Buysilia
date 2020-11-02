const db = require('../../../database/db')
const ClientDAO = require('../../../database/DAO/client/clientDAO')

const clientDAO = new ClientDAO(db)

class ClientModels{


    static getAllClients(){
        return clientDAO.getAllClientsInDB()   
    }

    static getClient(id){
        return clientDAO.getClientInDB(id)
    }

    static insertClient(body) {
        return clientDAO.insertClientInDB(body)
    }

    static modifyClient(body, id) {
        return clientDAO.modifyClientInDB(body, id)
    }

    static deleteClient(id){
        return clientDAO.deleteClientInDB(id)
    }

    static getByEmail(email){
        return clientDAO.getByEmailInDB(email)
    }

}

module.exports = ClientModels