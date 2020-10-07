const ProductModels = require('../../models/product/product')


class ProductController{

    static getAllProductsInDB(){
        return ((req, resp) => {
            ProductModels.getAllProductsInDB()
                .then(rows => resp.send(rows))
                .catch(err => {
                    console.log(err)
                    resp.send(err)
                }
                )
        })
    }

    static getAllProductOneProviderInDB(id){
        return ((req, resp) => {
            ProductModels.getAllProductOneProviderInDB(id)
                .then(rows => resp.send(rows))
                .catch(err => {
                    console.log(err)
                    resp.send(err)
                }
                )
        })
    }

    static  getProductOneProviderInDB(id){
        return ((req, resp) => {
            ProductModels. getProductOneProviderInDB(id)
                .then(rows => resp.send(rows))
                .catch(err => {
                    console.log(err)
                    resp.send(err)
                }
                )
        })
    }
}
module.exports = ProductController