const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const hospitalSchema = new Schema({
  name: {
    type: String,
    required: true
  },
  phone: {
    type: Number,
    required: true
  },
  address: {
    type: String,
    required: true
  },
  location: {
    lat: Number,
    long: Number
  },
  doctorList: {
    specialization: String,
    doctors: {type: Array, default: []}
  },
  createdAt: {
    type: Date,
    default: Date.now
  }
});

mongoose.model('hospital', hospitalSchema);
