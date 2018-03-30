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
  describe('getAllBands', () => {
    it('should get all bands', () => {
      sinon.stub(Band, 'find');
      Band.find.yields([
        { name: 'Way Cool Band', genre: 'Way Awesome genre', },
        { name: 'The Coolest', genre: 'The Coolest genre', }
      ]);
      Band.getAllBands((bands) => {
        expect(bands.length).to.equal(2);
        expect(bands[0].name).to.equal('Way Cool Band');
      })
    })
  })
});
