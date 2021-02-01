const express = require('express')
const reviewCtrl = require('../controllers/movie-ctrl')
const router = express.Router();

router.post('/message',reviewCtrl.createReview)
router.post('/subscribe',reviewCtrl.createSubscibe)

module.exports = router