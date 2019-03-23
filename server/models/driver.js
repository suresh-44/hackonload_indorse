const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const driverSchema = new Schema({
  name: String,
  hopitalId: {
    type: Schema.Types.ObjectId,
    ref: 'hospital'
  },
  phone: Number
});

mongoose.model('driver', hospitalSchema);
