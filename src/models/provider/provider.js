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

    static insertProvider(body) {
        return providerDAO.insertProviderInDB(body)
    }

    static modifyProvider(body, id) {
        return providerDAO.modifyProviderInDB(body, id)
    }

    static deleteProvider(id){
        return providerDAO.deleteProviderInDB(id)
    }

    static getProviderByCNPJ(cnpj){
        return providerDAO.getProviderByCNPJInDB(cnpj)
    }

}

module.exports = ProviderModels