const mongoose = require('mongoose');

const chai = require('chai');
const { expect } = require('chai');
const sinon = require('sinon');

const Band = require('./models');

describe('Bands', () => { // Bands test suite
  describe('getBandName', () => {
    it('should get the band\'s name', () => {
      const band = new Band({
        name: 'Cool Band Name',
        genre: 'Awesome genre',
      });
      expect(band.getBandName()).to.equal('Cool Band Name');
    });
  });
});
