const { validationResult } = require('express-validator')
const generateHash = require('../../config/validator/hashGenerator')

const ClientModels = require('../../models/client/client')


class ClientController{

    static getAllClients(){
        return ((req, resp) => {
            ClientModels.getAllClients()
                .then(rows => resp.send(rows))
                .catch(err => {
                    console.log(err)
                    resp.send(err)
                }
                )
        })
    }

    static getClient(){
        return ((req, resp) => {
            ClientModels.getClient(req.params.id)
                .then(rows => resp.send(rows))
                .catch(err => {
                    console.log(err)
                    resp.send(err)
                }
                )
        })
    }


    static insertClient() {
        return (async (req, resp) => {
            const errors = validationResult(req)
            if (!errors.isEmpty()) {
                return resp.status(400).json({ errors: errors.array() })
            }

            req.body.password = await generateHash(req.body.password)

            return ClientModels.insertClient(req.body)
            .then(msg  => { 
                console.log(msg) 
                resp.redirect('/client')
            })
            .catch(err => {
                console.log(err) 
                resp.send(err)
            })
            
            
        })
    }

    static modifyClient(){
        return (async (req, resp) => {
            const errors = validationResult(req)
            if (!errors.isEmpty()) {
                return resp.status(400).json({ errors: errors.array() })
            }

            req.body.password = await generateHash(req.body.password)

            return ClientModels.modifyClient(req.body, req.params.id)
                        .then(msg  => { 
                            console.log(msg) 
                            resp.send(msg)
                        })
                        .catch(err => {
                            console.log(err) 
                            resp.send(err)
                        })

        })
    }

    static deleteClient(){
        return ((req, resp) => {
            ClientModels.deleteClient(req.params.id)
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

module.exports = ClientController