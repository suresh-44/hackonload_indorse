const express = require('express');
const mongoose = require('mongoose');

require('../models/hospital');

const Hospital = mongoose.model('hospital');

const router = express.Router();

router.get('/create', (req, res) => {
  res.render('hospital/index');
});

router.post('/create', (req, res) => {
  doctors = [];
  console.log(req.body.count);
  var str = 'req.body.doctor_';
  for (var i = 1; i <= req.body.count; i++) {
    var doctor = str + i;

    doctors.push(eval(doctor));
  }

  // console.log(doctors);

  const newHospital = {
    name: req.body.name,
    phone: req.body.phone,
    address: req.body.address,
    location: [
      {
        lat: req.body.lat,
        long: req.body.long
      }
    ],
    doctorList: {
      specialization: req.body.specialization,
      doctors
    }
  };

  new Hospital(newHospital)
    .save()
    .then(hospital => {
      res.send(JSON.stringify(hospital, undefined, 2));
    })
    .catch(err => console.log(err));
});

module.exports = router;
