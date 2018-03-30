const mongoose = require('mongoose');

const chai = require('chai');
const chaihttp = require('chai-http');
const { expect } = require('chai');
const sinon = require('sinon');

const server = require('./server');
chai.use(chaihttp);

const Band = require('./models');

describe('Server', () => {
  describe('[POST] /band', () => {
    it('should create a new band', () => {
      const newBand = {
        name: 'Cool Band Name',
        genre: 'Awesome genre',
      };
      chai.request(server)
        .post('/band')
        .send(newBand)
        .end((err, res) => {
          if (err) console.error(err);
          expect(res.status).to.equal(200);
          expect(res.body.name).to.equal('Cool Band Name');
        });
    });
  });

  describe('[GET] /bands', () => {
    it('should return `all bands`', () => {
      chai.request(server)
        .get('/bands')
        .end((err, res) => {
          if (err) console.error(err);
          expect(res.status).to.equal(200);
          expect(res.body).to.equal('all bands');
        });
    });
  });
});
