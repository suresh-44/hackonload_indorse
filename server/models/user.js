const mongoose = require('mongoose');

const Schema = mongoose.Schema;

// const userSchema = new Schema({
//     name : String,
//     phone : Number,
//     email : String,
//     blood_gp : String,

// })

const doctorSchema = new Schema({
  name: String,
  spec: String,
  att: Boolean,
  phone: Number
});

// mongoose.model('user', userSchema)
mongoose.model('doctor', doctorSchema);
