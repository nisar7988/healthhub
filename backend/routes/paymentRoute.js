const express = require('express');
const { handlePayment } = require('../controler/paymentController');
const route =  express.Router();


route.post('/patient',handlePayment)







module.exports = route;