const chai = require("chai");
const should = chai.should();
const chaiHttp = require("chai-http");

const app = require("../src/server");

chai.use(chaiHttp);

describe("/DELETE/:id client", () => {
  it("it should DELETE a client given the id", (done) => {
    chai
      .request(app)
      .delete("/client/11")
      .end((err, res) => {
        res.should.have.status(200);
        res.body.should.be.a("object");
        res.body.should.have.eql({ message: "Client deleted"});
        done();
      });
  });
});

describe("/DELETE/:id client", () => {
  it("it should DELETE a client given the id", (done) => {
    chai
      .request(app)
      .delete("/client/15")
      .end((err, res) => {
        res.should.have.status(200);
        res.body.should.be.a("object");
        res.body.should.have.eql({ error: "Nonexistent Client"});
        done();
      });
  });
});