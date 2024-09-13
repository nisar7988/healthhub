const express = require('express');
const { userSignup , data , deletePatient , updatePatient } = require('../controler/patientController');
const router = express.Router();

router.post('/signup',userSignup)

router.get('/data',data)
router.delete('/datadelete/:id', deletePatient)
router.put('/dataupdate/:id',updatePatient)
// router.get('/profile/:id',getdata)






module.exports = router;    