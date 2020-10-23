const chai = require("chai");
const should = chai.should();
const chaiHttp = require("chai-http");

const app = require("../src/server");

chai.use(chaiHttp);

describe("/POST client", () => {
  it("it should not POST a client without cpf", (done) => {
    let client = {
        first_name: "Paula",
        last_name: "Oliveira",
        email: "paula@gmail.com",
        password:
          "Jaspion",
        cpf: "12345",
        phone: "12345678911424",
        address: "Barra, Rio"
      }
      chai
      .request(app)
      .post("/client")
      .send(client)
      .end((err, resp) => {
        resp.should.have.status(400);
        resp.body.should.be.a("object");
        resp.body.should.have.property("errors");
        resp.body.errors[0].should.have.property("param");
        resp.body.errors[0].param.should.have.eql("cpf");
        done();
    });
  })

  it("it should POST a client", (done) => {
    let client = {
      "first_name": "Vic",
      "last_name": "Marques",
      "email": "vic@gmail.com",
      "password": "$2b$10$iA/z9tn8pNB7GgMUto1duuRUL4HQvEzg9hcUtAfCaM17XizE06Vn.",
      "cpf": "12345624568",
      "phone": "12345678911425",
      "address": "Rocinha"
    }
      chai
      .request(app)
      .post("/client")
      .send(client)
      .end((err, resp) => {
        resp.should.have.status(200);
        resp.body.should.be.a("array");
        resp.body[10].client_id.should.be.eql(11);
        resp.body[10].first_name.should.be.eql("Vic");
        done();
    });
  })
});
