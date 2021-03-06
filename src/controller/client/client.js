const { validationResult } = require('express-validator')
const generateHash = require('../../config/validator/hashGenerator')

const ClientModels = require('../../models/client/client')

const comparePassword = require('../../config/validator/comparePassword')


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
                .then(row => resp.send(row))
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
            .then(lastID  => { 
                console.log('Client Inserted') 
                console.log(lastID)
                resp.send({client_id: lastID})
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
                            resp.send({ message: msg })
                        })
                        .catch(err => {
                            console.log(err) 
                            resp.send({ error: err })
                        })

        })
    }

    static deleteClient(){
        return ((req, resp) => {
            ClientModels.deleteClient(req.params.id)
                .then( msg => {
                    console.log(msg)
                    resp.send({ message: msg })
                })
                .catch(err => {
                    console.log(err)
                    resp.send({ error: err })
                })
        })
    }

    static checkLogin(){
        return (async (req, resp) => {
            const row = await ClientModels.getByEmail(req.body.email)
                .then((row) => {
                    return row})
                .catch(err => {
                    console.log(err)
                    resp.send({ error: err })
            })
            console.log(row)
            return comparePassword(req.body.password, row).then(() => {
                resp.send(row)
            }).catch((err) => {
                console.log(err)
                resp.send({client_id:0})
            })
        })
    }

}

module.exports = ClientController