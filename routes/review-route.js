const express = require('express')
const reviewCtrl = require('../controllers/movie-ctrl')
const router = express.Router();

router.post('/review',reviewCtrl.createReview)

module.exports = router