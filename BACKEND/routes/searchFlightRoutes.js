const express = require('express');
const router = express.Router();
const flightController = require('../controller/searchFlightController');

router.get('/', flightController.searchFlights);
router.get('/searchFlightsByPrice', flightController.searchFlightsByPrice);

module.exports = router;
