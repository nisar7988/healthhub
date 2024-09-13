const express = require('express');
const {login, getData}= require('../controler/loginController')
const router = express.Router();


router.post('/',login)
router.get('/userinfo', getData)


module.exports = router;
