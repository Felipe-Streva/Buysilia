const chai = require("chai");
const should = chai.should();
const chaiHttp = require("chai-http");

const app = require("../src/server");

chai.use(chaiHttp);

describe("/PUT/:id client", () => {
  it("it should UPDATE a client given the id", (done) => {
    let client = {
      first_name: "Vic",
      last_name: "Rainha",
      email: "queen@gmail.com",
      password: "$2b$10$Ea0FB7N4ZaiQkLdSxn5N8OrIrmWkA5gOcKTMncqDpMWiRtPP.zM1O",
      cpf: "12345678978",
      phone: "55545678911425",
      address: "Rio, Rocinha",
    };
    chai
      .request(app)
      .put("/client/2")
      .send(client)
      .end((err, res) => {
        res.should.have.status(200);
        res.body.should.be.a("object");
        res.body.should.have.eql({ message: "Client modified"});
        done();
      });
  });
});
