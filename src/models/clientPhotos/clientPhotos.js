const db = require('../../../database/db')
const ClientPhotosDAO = require('../../../database/DAO/clientPhotos/clientPhotosDAO')

const clientPhotosDAO = new ClientPhotosDAO(db)

class ClientPhotosModels{

    static getClientPhoto(id){
        return clientPhotosDAO.getClientPhotoInDB(id)   
    }

    static insertClientPhoto(body){
        return clientPhotosDAO.insertClientPhotoInDB(body)
    }

    static deleteClientPhoto(id){
        return clientPhotosDAO.deleteClientPhotoInDB(id)   
    }
}

module.exports = ClientPhotosModels