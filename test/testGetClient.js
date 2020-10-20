const chai = require("chai");
const should = chai.should();
const chaiHttp = require("chai-http");

const app = require("../src/server");

chai.use(chaiHttp);

describe("getAllClients test", () => {
  it("test all clients", (done) => {
    chai
      .request(app)
      .get("/client")
      .end((err, resp) => {
        resp.should.have.status(200);
        resp.body.should.be.a("array");
        resp.body[0].should.be.eql(
          {
            client_id: 1,
            first_name: "Dudu",
            last_name: "Oliveira",
            email: "dudu@gmail.com",
            password:
              "$2b$10$Ea0FB7N4ZaiQkLdSxn5N8OrIrmWkA5gOcKTMncqDpMWiRtPP.zM1O",
            cpf: "12345678922",
            phone: "12345678911425",
            address: "Queimados, ponte preta",
          },
          {
            client_id: 2,
            first_name: "Lipe",
            last_name: "Nunes",
            email: "lipe@gmail.com",
            password:
              "$2b$10$Ea0FB7N4ZaiQkLdSxn5N8OrIrmWkA5gOcKTMncqDpMWiRtPP.zM1O",
            cpf: "11548526451",
            phone: "12345678911333",
            address: "Rio, Tijuca",
          },
          {
            client_id: 3,
            first_name: "Vic",
            last_name: "Rainha",
            email: "queen@gmail.com",
            password:
              "$2b$10$Ea0FB7N4ZaiQkLdSxn5N8OrIrmWkA5gOcKTMncqDpMWiRtPP.zM1O",
            cpf: "12345678978",
            phone: "55545678911425",
            address: "Rio, Rocinha",
          },
          {
            client_id: 4,
            first_name: "Ivan",
            last_name: "Vovô",
            email: "ivan@gmail.com",
            password:
              "$2b$10$Ea0FB7N4ZaiQkLdSxn5N8OrIrmWkA5gOcKTMncqDpMWiRtPP.zM1O",
            cpf: "12355578922",
            phone: "12349515911425",
            address: "Fim do mundo",
          },
          {
            client_id: 5,
            first_name: "Jorge",
            last_name: "Dicas",
            email: "dicas@youtube.com",
            password:
              "$2b$10$Ea0FB7N4ZaiQkLdSxn5N8OrIrmWkA5gOcKTMncqDpMWiRtPP.zM1O",
            cpf: "12375378922",
            phone: "12345951546425",
            address: "Rio, Tijuca",
          },
          {
            client_id: 6,
            first_name: "Pedro",
            last_name: "Silva",
            email: "silva@gmail.com",
            password:
              "$2b$10$Ea0FB7N4ZaiQkLdSxn5N8OrIrmWkA5gOcKTMncqDpMWiRtPP.zM1O",
            cpf: "15243567852",
            phone: "54257854201215",
            address: "Rio, Lapa",
          },
          {
            client_id: 7,
            first_name: "Ana",
            last_name: "Oliveira",
            email: "ana@gmail.com",
            password:
              "$2b$10$Ea0FB7N4ZaiQkLdSxn5N8OrIrmWkA5gOcKTMncqDpMWiRtPP.zM1O",
            cpf: "12345852922",
            phone: "12345662545325",
            address: "Queimados, ponte preta",
          },
          {
            client_id: 8,
            first_name: "Mônica",
            last_name: "Nunes",
            email: "momo@youtube.com",
            password:
              "$2b$10$Ea0FB7N4ZaiQkLdSxn5N8OrIrmWkA5gOcKTMncqDpMWiRtPP.zM1O",
            cpf: "15525789225",
            phone: "12347535811425",
            address: "Rio, Leblon",
          },
          {
            client_id: 9,
            first_name: "Duda",
            last_name: "Dominos",
            email: "dominos@gmail.com",
            password:
              "$2b$10$Ea0FB7N4ZaiQkLdSxn5N8OrIrmWkA5gOcKTMncqDpMWiRtPP.zM1O",
            cpf: "12345677892",
            phone: "22225678911425",
            address: "Rio, Meier",
          },
          {
            client_id: 10,
            first_name: "Jarom",
            last_name: "Ai...",
            email: "jaja@gmail.com",
            password:
              "$2b$10$Ea0FB7N4ZaiQkLdSxn5N8OrIrmWkA5gOcKTMncqDpMWiRtPP.zM1O",
            cpf: "12347586922",
            phone: "12349999911425",
            address: "Nikit, longe",
          }
        );

        done();
      });
  });
});

describe("getClient test", () => {
  it("test client 1", (done) => {
    chai
      .request(app)
      .get("/client/1")
      .end((err, resp) => {
        resp.should.have.status(200);
        resp.body.should.be.eql({
          client_id: 1,
          first_name: "Dudu",
          last_name: "Oliveira",
          email: "dudu@gmail.com",
          password:
            "$2b$10$Ea0FB7N4ZaiQkLdSxn5N8OrIrmWkA5gOcKTMncqDpMWiRtPP.zM1O",
          cpf: "12345678922",
          phone: "12345678911425",
          address: "Queimados, ponte preta",
        });

        done();
      });
  });

  it("test client 2", (done) => {
    chai
      .request(app)
      .get("/client/2")
      .end((err, resp) => {
        resp.should.have.status(200);
        resp.body.should.be.eql({
          client_id: 2,
          first_name: "Lipe",
          last_name: "Nunes",
          email: "lipe@gmail.com",
          password:
            "$2b$10$Ea0FB7N4ZaiQkLdSxn5N8OrIrmWkA5gOcKTMncqDpMWiRtPP.zM1O",
          cpf: "11548526451",
          phone: "12345678911333",
          address: "Rio, Tijuca",
        });

        done();
      });
  });

  it("test client 3", (done) => {
    chai
      .request(app)
      .get("/client/3")
      .end((err, resp) => {
        resp.should.have.status(200);
        resp.body.should.be.eql({
          client_id: 3,
          first_name: "Vic",
          last_name: "Rainha",
          email: "queen@gmail.com",
          password:
            "$2b$10$Ea0FB7N4ZaiQkLdSxn5N8OrIrmWkA5gOcKTMncqDpMWiRtPP.zM1O",
          cpf: "12345678978",
          phone: "55545678911425",
          address: "Rio, Rocinha",
        });

        done();
      });
  });

  it("test client 4", (done) => {
    chai
      .request(app)
      .get("/client/4")
      .end((err, resp) => {
        resp.should.have.status(200);
        resp.body.should.be.eql({
          client_id: 4,
          first_name: "Ivan",
          last_name: "Vovô",
          email: "ivan@gmail.com",
          password:
            "$2b$10$Ea0FB7N4ZaiQkLdSxn5N8OrIrmWkA5gOcKTMncqDpMWiRtPP.zM1O",
          cpf: "12355578922",
          phone: "12349515911425",
          address: "Fim do mundo",
        });

        done();
      });
  });

  it("test client 5", (done) => {
    chai
      .request(app)
      .get("/client/5")
      .end((err, resp) => {
        resp.should.have.status(200);
        resp.body.should.be.eql({
          client_id: 5,
          first_name: "Jorge",
          last_name: "Dicas",
          email: "dicas@youtube.com",
          password:
            "$2b$10$Ea0FB7N4ZaiQkLdSxn5N8OrIrmWkA5gOcKTMncqDpMWiRtPP.zM1O",
          cpf: "12375378922",
          phone: "12345951546425",
          address: "Rio, Tijuca",
        });

        done();
      });
  });

  it("test client 6", (done) => {
    chai
      .request(app)
      .get("/client/6")
      .end((err, resp) => {
        resp.should.have.status(200);
        resp.body.should.be.eql({
          client_id: 6,
          first_name: "Pedro",
          last_name: "Silva",
          email: "silva@gmail.com",
          password:
            "$2b$10$Ea0FB7N4ZaiQkLdSxn5N8OrIrmWkA5gOcKTMncqDpMWiRtPP.zM1O",
          cpf: "15243567852",
          phone: "54257854201215",
          address: "Rio, Lapa",
        });

        done();
      });
  });

  it("test client 7", (done) => {
    chai
      .request(app)
      .get("/client/7")
      .end((err, resp) => {
        resp.should.have.status(200);
        resp.body.should.be.eql({
          client_id: 7,
          first_name: "Ana",
          last_name: "Oliveira",
          email: "ana@gmail.com",
          password:
            "$2b$10$Ea0FB7N4ZaiQkLdSxn5N8OrIrmWkA5gOcKTMncqDpMWiRtPP.zM1O",
          cpf: "12345852922",
          phone: "12345662545325",
          address: "Queimados, ponte preta",
        });

        done();
      });
  });

  it("test client 8", (done) => {
    chai
      .request(app)
      .get("/client/8")
      .end((err, resp) => {
        resp.should.have.status(200);
        resp.body.should.be.eql({
          client_id: 8,
          first_name: "Mônica",
          last_name: "Nunes",
          email: "momo@youtube.com",
          password:
            "$2b$10$Ea0FB7N4ZaiQkLdSxn5N8OrIrmWkA5gOcKTMncqDpMWiRtPP.zM1O",
          cpf: "15525789225",
          phone: "12347535811425",
          address: "Rio, Leblon",
        });

        done();
      });
  });

  it("test client 9", (done) => {
    chai
      .request(app)
      .get("/client/9")
      .end((err, resp) => {
        resp.should.have.status(200);
        resp.body.should.be.eql({
          client_id: 9,
          first_name: "Duda",
          last_name: "Dominos",
          email: "dominos@gmail.com",
          password:
            "$2b$10$Ea0FB7N4ZaiQkLdSxn5N8OrIrmWkA5gOcKTMncqDpMWiRtPP.zM1O",
          cpf: "12345677892",
          phone: "22225678911425",
          address: "Rio, Meier",
        });

        done();
      });
  });

  it("test client 10", (done) => {
    chai
      .request(app)
      .get("/client/10")
      .end((err, resp) => {
        resp.should.have.status(200);
        resp.body.should.be.eql({
          client_id: 10,
          first_name: "Jarom",
          last_name: "Ai...",
          email: "jaja@gmail.com",
          password:
            "$2b$10$Ea0FB7N4ZaiQkLdSxn5N8OrIrmWkA5gOcKTMncqDpMWiRtPP.zM1O",
          cpf: "12347586922",
          phone: "12349999911425",
          address: "Nikit, longe",
        });

        done();
      });
  });
});
