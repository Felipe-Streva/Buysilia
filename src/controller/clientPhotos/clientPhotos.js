const { validationResult } = require('express-validator')

const ClientPhotosModels = require('../../models/clientPhotos/clientPhotos')


class ClientPhotosController{

    static getClientPhoto(){
        return ((req, resp) => {
            ClientPhotosModels.getClientPhoto(req.params.clientId)
                .then(row => {
                    if(row) resp.send(row)
                    resp.send({url_client:'https://www.promoview.com.br/uploads/images/unnamed%2819%29.png'})
                    
                })
                .catch(err => {
                    console.log(err)
                    resp.send(err)
                }
                )
        })
    }

    static insertClientPhoto(){
        return ((req, resp) => {
            const errors = validationResult(req)
            if (!errors.isEmpty()) {
                return resp.status(400).json({ errors: errors.array() })
            }

            return ClientPhotosModels.insertClientPhoto(req.body)
                        .then(msg =>{
                            console.log(msg)
                            resp.redirect(`/client/photos/${req.body.client_id}`)
                        })
                        .catch(err => {
                            console.log(err)
                            resp.send({ error: err })
                        })
        })
    }

    static deleteClientPhoto(){
        return ((req, resp) => {
            ClientPhotosModels.deleteClientPhoto(req.params.clientId)
                .then( msg => {
                    console.log(msg)
                    resp.send({ message: msg })
                })
                .catch(err => {
                    console.log(err)
                    resp.send(err)
                }
                )
        })
    }
}

module.exports = ClientPhotosController

