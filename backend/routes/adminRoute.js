const express = require('express');
const { getData } = require('../controler/adminController')
const router = express.Router();



router.get('/data',getData)





module.exports = router;
