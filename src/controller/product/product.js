const ProductModels = require('../../models/product/product')
const { validationResult } = require('express-validator')
const { product_id } = require('../../config/validator/validator')


class ProductController{

    static getAllProducts(){
        return ((req, resp) => {
            ProductModels.getAllProducts()
                .then(rows => resp.send(rows))
                .catch(err => {
                    console.log(err)
                    resp.send({ error: err })
                }
                )
        })
    }

    static getAllProductsByProvider(){
        return ((req, resp) => {
            ProductModels.getAllProductsByProvider(req.params.providerId)
                .then(rows => resp.send(rows))
                .catch(err => {
                    console.log(err)
                    resp.send({ error: err })
                }
                )
        })
    }

    static  getProduct(){
        return ((req, resp) => {
            ProductModels.getProduct(req.params.id)
                .then(rows => resp.send(rows))
                .catch(err => {
                    console.log(err)
                    resp.send({ error: err })
                }
                )
        })
    }

    static insertProduct(){
        return ((req, resp) => {
            const errors = validationResult(req)
            if (!errors.isEmpty()) {
                return resp.status(400).json({ errors: errors.array() })
            }

            return ProductModels.insertProduct(req.body)
                        .then(lastID =>{
                            console.log('Product inserted')
                            resp.send({product_id: lastID})
                        })
                        .catch(err => {
                            console.log(err)
                            resp.send({ error: err })
                        })
        })
    }

    static modifyProduct() {
        return (req, resp) => {
          const errors = validationResult(req);
          if (!errors.isEmpty()) {
            return resp.status(400).json({ errors: errors.array() });
          }
    
          return ProductModels.modifyProduct(req.body, req.params.id)
            .then((msg) => {
              console.log(msg);
              resp.send({ message: msg });
            })
            .catch((err) => {
              console.log(err);
              resp.send({ error: err });
            });
        };
    }

    static deleteProduct(){
        return ((req, resp) => {
            ProductModels.deleteProduct(req.params.id)
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
}

module.exports = ProductController