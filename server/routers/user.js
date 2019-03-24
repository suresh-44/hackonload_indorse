const express = require('express')
const mongoose = require('mongoose')

const router  = express.Router()

require('../models/user')
const Doctor = mongoose.model('doctor')

router.get('/doctor', (req, res) =>{

    Doctor.find({}).then(doctor => {
        res.json(doctor)
    }).catch(err => console.log(err))
        
})

module.exports = router