const ProviderModels = require('../../models/provider/provider')

class ProviderController{

    static getAllProviders(){
        return ((req, resp) => {
            ProviderModels.getAllProviders()
                .then(rows => resp.send(rows))
                .catch(err => {
                    console.log(err)
                    resp.send(err)
                }
                )
        })
    }

    static getProvider(){
        return ((req, resp) => {
           ProviderModels.getProvider(req.params.id)
                .then(rows => resp.send(rows))
                .catch(err => {
                    console.log(err)
                    resp.send(err)
                }
                )
        })
    }

    static deleteProvider(){
        return ((req, resp) => {
            ProviderModels.deleteProvider(req.params.id)
                .then( msg => {
                    console.log(msg)
                    resp.send(`${msg}`)
                })
                .catch(err => {
                    console.log(err)
                    resp.send(err)
                })
        })
    }

}

module.exports = ProviderController