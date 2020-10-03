
const bcrypt = require('bcrypt');

function generateHash(password){
    const saltRounds = 10;

    return new Promise((resolve, reject) => {bcrypt.genSalt(saltRounds, (err, salt) => {
        bcrypt.hash(password, salt,(err, hash) => {
            if(err) reject(err)

            resolve(hash)

        })
    })})
}


module.exports = generateHash