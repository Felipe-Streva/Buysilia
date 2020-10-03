const chai = require('chai')
const should = chai.should()
const chaiHttp = require('chai-http')

const app = require('../src/server')

chai.use(chaiHttp);



describe('getAllClients test' , () => {
    it('test all clients' , (done) => {
        chai.request(app)
            .get('/client')
            .end((err, resp) => {
                resp.should.have.status(200)
                resp.body.should.be.a('array')
                resp.body[0].should.be.eql(
                    {
                      client_id: 1,
                      first_name: 'Dudu',
                      last_name: 'Oliveira',
                      email: 'dudu@gmail.com',
                      password: 'Jaspion',
                      cpf: '123456789',
                      phone: '12345678911425',
                      adress: 'Queimados, ponte preta'
                    }
                  )

            done()
            })
    })
})

describe('getClient test' , () => {
    it('test client 1' , (done) => {
        chai.request(app)
            .get('/client/1')
            .end((err, resp) => {
                resp.should.have.status(200)
                resp.body.should.be.eql(
                    {
                      client_id: 1,
                      first_name: 'Dudu',
                      last_name: 'Oliveira',
                      email: 'dudu@gmail.com',
                      password: 'Jaspion',
                      cpf: '123456789',
                      phone: '12345678911425',
                      adress: 'Queimados, ponte preta'
                    }
                  )

            done()
            })
    })
})


