const express = require('express');
const mongoose = require('mongoose');

const router = express.Router();

require('../models/user');
const Doctor = mongoose.model('doctor');

router.get('/doctor', (req, res) => {
  Doctor.find({})
    .then(doctor => {
      res.json(doctor);
    })
    .catch(err => console.log(err));
});

router.post('/doctor', (req, res) => {
  const newDoctor = {
    name: req.body.name,
    phone: req.body.phone,
    spec: req.body.spec,
    att: req.body.att
  };

  new Doctor(newDoctor)
    .save()
    .then(doctor => {
      res.send({doctor: doctor});
    })
    .catch(err => {
      console.log(err);
    });
});

module.exports = router;
