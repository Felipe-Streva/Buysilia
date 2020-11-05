const ProviderModels = require("../../models/provider/provider");
const { validationResult } = require("express-validator");

class ProviderController {
  static getAllProviders() {
    return (req, resp) => {
      ProviderModels.getAllProviders()
        .then((rows) => resp.send(rows))
        .catch((err) => {
          console.log(err);
          resp.send({ error: err });
        });
    };
  }

  static getProvider() {
    return (req, resp) => {
      ProviderModels.getProvider(req.params.id)
        .then((rows) => resp.send(rows || {}))
        .catch((err) => {
          console.log(err);
          resp.send({ error: err });
        });
    };
  }

  static insertProvider() {
    return (req, resp) => {
      const errors = validationResult(req);
      if (!errors.isEmpty()) {
        return resp.status(400).json({ errors: errors.array() });
      }

      return ProviderModels.insertProvider(req.body)
        .then((lastID) => {
          console.log('Provider inserted');
          resp.send({provider_id: lastID});
        })
        .catch((err) => {
          console.log(err);
          resp.send({ error: err })
        });
    };
  }

  static modifyProvider() {
    return (req, resp) => {
      const errors = validationResult(req);
      if (!errors.isEmpty()) {
        return resp.status(400).json({ errors: errors.array() });
      }

      return ProviderModels.modifyProvider(req.body, req.params.id)
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

  static deleteProvider() {
    return (req, resp) => {
      ProviderModels.deleteProvider(req.params.id)
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

  static checkLogin(){
    return ((req, resp) => {
      ProviderModels.getProviderByCNPJ(req.body.cnpj)
        .then(row => resp.send(row))
        .catch(err => {
          console.log(err)
          resp.send({provider_id:0})
        })
    })
  }

}

module.exports = ProviderController;
