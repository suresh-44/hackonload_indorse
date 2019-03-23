const express = require('express');
const mongoose = require('mongoose');

const Hospital = mongoose.model('hospital');

const router = express.Router();

router.get('/create', (req, res) => {
  res.render('create');
});

router.post('/create', (req, res) => {
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
    doctorList: [{}]
  };
});
