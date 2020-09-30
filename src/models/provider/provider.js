const db = require('../../../database/db')
const ProviderDAO = require('../../../database/DAO/provider/providerDAO')

const providerDAO = new ProviderDAO(db)

class ProviderModels{


    static getAllProviders(){
        return providerDAO.getAllProvidersInDB()   
    }

    static getProvider(id){
        return providerDAO.getProviderInDB(id)
    }

    static deleteProvider(id){
        return providerDAO.deleteProviderInDB(id)
    }

}

module.exports = ProviderModels