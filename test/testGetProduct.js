const chai = require("chai");
const should = chai.should();
const chaiHttp = require("chai-http");

const app = require("../src/server");

chai.use(chaiHttp);

describe("getAllProduct test", () => {
  it("test all product", (done) => {
    chai
      .request(app)
      .get("/product")
      .end((err, resp) => {
        resp.should.have.status(200);
        resp.body.should.be.a("array");
        resp.body[0].should.be.eql(
          {
            product_id: 1,
            provider_id: 4,
            name: "Nokia3000",
            evaluation: 10,
            description: "Tijolao",
            price: 150.99,
            stock: 50,
          },
          {
            product_id: 2,
            provider_id: 3,
            name: "Fogão Brastemp",
            evaluation: 9,
            description: "Fogão Brastemp",
            price: 999.99,
            stock: 10,
          },
          {
            product_id: 3,
            provider_id: 1,
            name: "Fogão Brastemp",
            evaluation: 9,
            description: "Fogão Brastemp",
            price: 799.99,
            stock: 20,
          }
        );

        done();
      });
  });
});

describe("getProduct test", () => {
  it("test product 1", (done) => {
    chai
      .request(app)
      .get("/product/1")
      .end((err, resp) => {
        resp.should.have.status(200);
        resp.body[0].should.be.eql({
          product_id: 1,
            provider_id: 4,
            name: "Nokia3000",
            evaluation: 10,
            description: "Tijolao",
            price: 150.99,
            stock: 50,
        });

        done();
      });
  });

  it("test product 2", (done) => {
    chai
      .request(app)
      .get("/product/2")
      .end((err, resp) => {
        resp.should.have.status(200);
        resp.body[0].should.be.eql({
          product_id: 2,
            provider_id: 3,
            name: "Fogão Brastemp",
            evaluation: 9,
            description: "Fogão bonitão, cheio de bocas",
            price: 999.99,
            stock: 10,
        });

        done();
      });
  });

  it("test product 3", (done) => {
    chai
      .request(app)
      .get("/product/3")
      .end((err, resp) => {
        resp.should.have.status(200);
        resp.body[0].should.be.eql({
          product_id: 3,
            provider_id: 1,
            name: "Fogão Brastemp",
            evaluation: 9,
            description: "Fogão bonitão, cheio de bocas",
            price: 799.99,
            stock: 20,
        });

        done();
      });
  });
});
