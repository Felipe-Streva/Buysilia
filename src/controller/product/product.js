const ProductModels = require('../../models/product/product')
const { validationResult } = require('express-validator')


class ProductController{

    static getAllProducts(){
        return ((req, resp) => {
            ProductModels.getAllProducts()
                .then(rows => resp.send(rows))
                .catch(err => {
                    console.log(err)
                    resp.send(err)
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
                    resp.send(err)
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
                    resp.send(err)
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
                        .then(msg =>{
                            console.log(msg)
                            resp.redirect('/product')
                        })
                        .catch(err => {
                            console.log(err)
                            resp.send(err)
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
              resp.send(msg);
            })
            .catch((err) => {
              console.log(err);
              resp.send(err);
            });
        };
    }

    static deleteProduct(){
        return ((req, resp) => {
            ProductModels.deleteProduct(req.params.id)
                .then( msg => {
                    console.log(msg)
                    resp.send(msg)
                })
                .catch(err => {
                    console.log(err)
                    resp.send(err)
                })
        })
    }
}

module.exports = ProductController