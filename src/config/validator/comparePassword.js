const bcrypt = require("bcrypt")


function comparePassword(entered, row){
    const passwordEnteredByUser = entered
    const hash = row.password

    return new Promise((resolve, reject) => {
        bcrypt.compare(passwordEnteredByUser, hash, function(err, isMatch) {
            if (err) {
              throw err
            } else if (!isMatch) {
              reject('Senha e Login não válidos')
            } else {
              resolve(row)
            }
          })

    }) 
}

module.exports = comparePassword

