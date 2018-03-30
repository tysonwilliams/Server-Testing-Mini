const mongoose = require('mongoose');
const { Schema } = mongoose;

const BandSchema = new Schema({
  name: {
    type: String,
    required: true,
  },
  genre: {
    type: String,
    required: true,
  },
});

BandSchema.methods.getBandName = function() {
  return this.name;
};

BandSchema.statics.getAllBands = (cb) => {
  Band.find({}, (err, bands) => {
    if (err) console.error(err);
    cb(bands);
  });
};

const Band = mongoose.model('Band', BandSchema);

module.exports = Band;
