const chai = require("chai");
const should = chai.should();
const chaiHttp = require("chai-http");

const app = require("../src/server");

chai.use(chaiHttp);

describe("getAllPurchasesByClient test", () => {
    it("test purchase 1 by client", (done) => {
      chai
        .request(app)
        .get("/purchase/client/1")
        .end((err, resp) => {
          resp.should.have.status(200);
          resp.body.should.be.a('array');
          resp.body[0].product_id.should.be.eql(1)
          resp.body[1].product_id.should.be.eql(4)
          resp.body[0].date.should.be.a('string')
          done();
        });
    });
  
    it("test purchase 2 by client", (done) => {
        chai
          .request(app)
          .get("/purchase/client/2")
          .end((err, resp) => {
            resp.should.have.status(200);
            resp.body.should.be.a('array');
            resp.body[0].product_id.should.be.eql(3)
            resp.body[1].product_id.should.be.eql(3)
            resp.body[0].date.should.be.a('string')
            done();
          });
      });
  
      it("test purchase 3 by client", (done) => {
        chai
          .request(app)
          .get("/purchase/client/3")
          .end((err, resp) => {
            resp.should.have.status(200);
            resp.body.should.be.a('array');
            resp.body[0].product_id.should.be.eql(1)
            resp.body[0].date.should.be.a('string')
            done();
          });
      });
  });
  