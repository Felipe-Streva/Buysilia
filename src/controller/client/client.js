const ClientModels = require('../../models/client/client')

class ClientController{

    static getAllClients(){
        return ((req, resp) => {
            ClientModels.getAllClients()
                .then(rows => resp.send(rows))
                .catch(err => console.log(err))
        })
    }

}

module.exports = ClientController