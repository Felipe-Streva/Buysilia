const { body } = require('express-validator')

module.exports = {
    first_name: body('first_name').isLength({ min: 2 }),
    last_name: body('last_name').isLength({ min: 2 }),
    email: body('email').isEmail(),
    password: body('password').isLength({ min: 6 }),
    cpf: body('cpf').isLength({ min: 11, max: 11 }).isNumeric(),
    cnpj:  body('cnpj').isLength({ min: 14, max: 14 }).isNumeric(),
    name: body('name').isLength({ min: 2 }),
    company_name: body('company_name').isLength({ min: 2 }),
    provider_id: body('provider_id').isNumeric(),
    evaluation: body('evaluation').isNumeric(),
    stock: body('stock').isNumeric(),
    price: body('price').isNumeric(),
    id: body('id').isNumeric()
 } 