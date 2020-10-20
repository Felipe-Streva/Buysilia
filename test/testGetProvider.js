const chai = require("chai");
const should = chai.should();
const chaiHttp = require("chai-http");

const app = require("../src/server");

chai.use(chaiHttp);

describe("getAllProvider test", () => {
  it("test all provider", (done) => {
    chai
      .request(app)
      .get("/provider")
      .end((err, resp) => {
        resp.should.have.status(200);
        resp.body.should.be.a("array");
        resp.body[0].should.be.eql({
          provider_id: 1,
          name: "MAGALU",
          phone: "2585258521",
          company_name: "Magazine Luiza",
					cnpj: '12345678901234',
          address: "Sao paulo, capital"
				},
				{
          provider_id: 2,
          name: "AMBEV",
          phone: "2585595521",
          company_name: "AMBEV/INBEV",
					cnpj: '12345677777234',
          address: "Rio de Janeiro, capital"
				},
				{
          provider_id: 3,
          name: "Brastemp",
          phone: "2585286241",
          company_name: "BRASTEMP",
					cnpj: '12374852901234',
          address: "Sao paulo, capital"
        });

        done();
      });
  });
});

describe("getProvider test", () => {
  it("test provider 1", (done) => {
    chai
      .request(app)
      .get("/provider/1")
      .end((err, resp) => {
        resp.should.have.status(200);
        resp.body.should.be.eql({
          provider_id: 1,
          name: "MAGALU",
          phone: "2585258521",
          company_name: "Magazine Luiza",
					cnpj: '12345678901234',
          address: "Sao paulo, capital",
        });

        done();
      });
	});
	
	it("test provider 2", (done) => {
    chai
      .request(app)
      .get("/provider/2")
      .end((err, resp) => {
        resp.should.have.status(200);
        resp.body.should.be.eql({
          provider_id: 2,
          name: "AMBEV",
          phone: "2585595521",
          company_name: "AMBEV/INBEV",
					cnpj: '12345677777234',
          address: "Rio de Janeiro, capital"
        });

        done();
      });
	});
	
	it("test provider 3", (done) => {
    chai
      .request(app)
      .get("/provider/3")
      .end((err, resp) => {
        resp.should.have.status(200);
        resp.body.should.be.eql({
          provider_id: 3,
          name: "Brastemp",
          phone: "2585286241",
          company_name: "BRASTEMP",
					cnpj: '12374852901234',
          address: "Sao paulo, capital"
        });

        done();
      });
  });
});
