const { response } = require('express')
const { restart } = require('nodemon')
const { validationResult } = require('express-validator')
const bcrypt = require('bcrypt');
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
        return ((req, resp) => {
            const errors = validationResult(req)
            if (!errors.isEmpty()) {
                return resp.status(400).json({ errors: errors.array() })
            }

            const saltRounds = 10;
            const password = req.body.password;

            bcrypt.genSalt(saltRounds, (err, salt) => {
                bcrypt.hash(password, salt,(err, hash) => {
                    if(err) console.log(err)
                    
                    req.body.password = hash
    
                    return ClientModels.insertClient(req.body)
                    .then(msg  => { 
                        console.log(msg) 
                        resp.redirect('/client')
                    })
                    .catch(err => { console.log(err) })
                })
            })
            
        })
    }

    static deleteClient(){
        return ((req, resp) => {
            User.
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