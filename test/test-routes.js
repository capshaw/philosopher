const chai = require('chai');
const chaiHttp = require('chai-http');
const server = require('../app');
const mocha = require('mocha');

const expect = chai.expect;
const describe = mocha.describe;
const it = mocha.it;

chai.use(chaiHttp);

describe('Integration', () => {
  it('should show a welcome message on / GET', (done) => {
    chai.request(server)
      .get('/')
      .end((err, res) => {
        expect(res).to.have.status(200);
        expect(res).to.be.json; // eslint-disable-line no-unused-expressions
        done();
      });
  });

  it('should show an error message on non-existant path GET', (done) => {
    chai.request(server)
      .get('/does/not/exist')
      .end((err, res) => {
        expect(res).to.have.status(404);
        expect(res).to.be.json; // eslint-disable-line no-unused-expressions
        done();
      });
  });

  it('should show an error message on non-existant path POST', (done) => {
    chai.request(server)
      .post('/does/not/exist')
      .end((err, res) => {
        expect(res).to.have.status(404);
        expect(res).to.be.json; // eslint-disable-line no-unused-expressions
        done();
      });
  });

  it('should show an error message on non-existant path DELETE', (done) => {
    chai.request(server)
      .delete('/does/not/exist')
      .end((err, res) => {
        expect(res).to.have.status(404);
        expect(res).to.be.json; // eslint-disable-line no-unused-expressions
        done();
      });
  });

  it('should show an error message on non-existant path PUT', (done) => {
    chai.request(server)
      .put('/does/not/exist')
      .end((err, res) => {
        expect(res).to.have.status(404);
        expect(res).to.be.json; // eslint-disable-line no-unused-expressions
        done();
      });
  });
});
