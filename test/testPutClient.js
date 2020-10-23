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

// describe("/POST client", () => {
//   it("it should not POST a client without cpf", (done) => {
//     let client = {
//       first_name: "Paula",
//       last_name: "Oliveira",
//       email: "paula@gmail.com",
//       password: "Jaspion",
//       cpf: "12345",
//       phone: "12345678911424",
//       address: "Barra, Rio",
//     };
//     chai
//       .request(app)
//       .post("/client")
//       .send(client)
//       .end((err, resp) => {
//         resp.should.have.status(400);
//         resp.body.should.be.a("object");
//         resp.body.should.have.property("errors");
//         resp.body.errors[0].should.have.property("param");
//         resp.body.errors[0].param.should.have.eql("cpf");
//         done();
//       });
//   });

//   it("it should POST a client", (done) => {
//     let client = {
//       first_name: "Vic",
//       last_name: "Marques",
//       email: "vic@gmail.com",
//       password: "$2b$10$iA/z9tn8pNB7GgMUto1duuRUL4HQvEzg9hcUtAfCaM17XizE06Vn.",
//       cpf: "12345624568",
//       phone: "12345678911425",
//       address: "Rocinha",
//     };
//     chai
//       .request(app)
//       .post("/client")
//       .send(client)
//       .end((err, resp) => {
//         resp.should.have.status(200);
//         resp.body.should.be.a("array");
//         resp.body[11].should.be.eql({
//           client_id: 12,
//           first_name: "Vic",
//           last_name: "Marques",
//           email: "vic@gmail.com",
//           password:
//             "$2b$10$O/xT6JKlVel12hkVuwp5i.fWvzUgLqHV59EhN2knEVfsC3e8JsGp2",
//           cpf: "12345624568",
//           phone: "12345678911425",
//           address: "Rocinha",
//         });
//         done();
//       });
//   });
// });
