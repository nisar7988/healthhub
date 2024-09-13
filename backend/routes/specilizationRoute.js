const express = require('express');
const  specilizationController= require('../controler/specilizationController')

const router = express.Router();

router.get('/getdoctor',specilizationController.getdoctor)
router.get('/getspecilization',specilizationController.getSpecialization)


module.exports =router;

