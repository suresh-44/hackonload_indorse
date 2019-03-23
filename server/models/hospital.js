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
  location: [
    {
      lat: {
        type: Number,
        required: true
      },
      long: {
        type: Number,
        required: true
      }
    }
  ],
  doctorList: [
    {
      specialization: String,
      doctors: [name]
    }
  ],
  createdAt: {
    type: Date,
    default: Date.now
  }
});

mongoose.model('hospital', hospitalSchema);
