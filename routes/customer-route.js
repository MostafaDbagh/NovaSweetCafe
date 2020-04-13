const express = require('express')
const userCtrl = require('../controllers/customer-ctrl')
const router = express.Router();

router.post('/Login',userCtrl.createUser)

module.exports = router