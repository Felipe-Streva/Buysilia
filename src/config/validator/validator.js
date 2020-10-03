const { body } = require('express-validator')

module.exports = {
    first_name: body('first_name').isLength({ min: 2 }),
    last_name: body('last_name').isLength({ min: 2 }),
    email: body('email').isEmail(),
    password: body('password').isLength({ min: 6 }),
    cpf: body('cpf').isLength({ min: 11, max: 11 }).isNumeric()
 } 