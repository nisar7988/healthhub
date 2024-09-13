const express = require('express');
const router = express.Router();
const { dortorsignup , data ,deleteDoctor , updateDoctor } = require('../controler/doctorController')

router.post('/signupdoctor',dortorsignup)
router.get('/data',data)
router.delete('/datadelete/:id', deleteDoctor)
router.put('/dataupdate/:id', updateDoctor)






module.exports = router;