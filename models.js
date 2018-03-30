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

module.exports = mongoose.model('Band', BandSchema);
