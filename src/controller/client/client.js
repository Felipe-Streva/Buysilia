const ClientModels = require('../../models/client/client')

class ClientController{

    static getAllClients(){
        return ((req, resp) => {
            ClientModels.getAllClients(req.params.userType)
                .then(rows => resp.send(rows))
                .catch(err => {
                    console.log(err)
                    resp.send(err)
                }
                )
        })
    }

}

module.exports = ClientController