const { validationResult } = require('express-validator')

const ProductPhotosModels = require('../../models/productPhotos/productPhotos')


class ProductPhotosController{

    static getAllProductPhotos(){
        return ((req, resp) => {
            ProductPhotosModels.getAllProductPhotos(req.params.productId)
                .then(rows => resp.send(rows))
                .catch(err => {
                    console.log(err)
                    resp.send(err)
                }
                )
        })
    }

    static insertProductPhoto(){
        return ((req, resp) => {
            const errors = validationResult(req)
            if (!errors.isEmpty()) {
                return resp.status(400).json({ errors: errors.array() })
            }

            return ProductPhotosModels.insertProductPhoto(req.body)
                        .then(msg =>{
                            console.log(msg)
                            resp.redirect(`/product/photos/${req.body.productId}`)
                        })
                        .catch(err => {
                            console.log(err)
                            resp.send({ error: err })
                        })
        })
    }

    static deleteProductPhoto(){
        return ((req, resp) => {
            ProductPhotosModels.deleteProductPhoto(req.params.productPhototId)
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

    static deleteAllProductPhoto(){
        return ((req, resp) => {
            ProductPhotosModels.deleteAllProductPhoto(req.params.productId)
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

module.exports = ProductPhotosController