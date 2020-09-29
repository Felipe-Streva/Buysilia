const db = require('../../../database/db')
const ClientDAO = require('../../../database/DAO/client/clientDAO')

const clientDAO = new ClientDAO(db)

class ClientModels{


    static getAllClients(userType){
        if(userType == 'client') return clientDAO.getAllClientsInDB(userType)
        if(userType == 'provider') return clientDAO.getAllClientsInDB(userType)
        else return new Promise((resolve, reject) => reject('404 Not Found'))    
    }

}

module.exports = ClientModels