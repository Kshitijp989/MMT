const express = require('express');
const router = express.Router();
const { getUserFlights,cancelUserFlight } = require('../controller/getUserFlightsController');
const userAuth = require("../middleware/userAuth");

router.get('/userFlights/:email', getUserFlights);
router.put('/userFlights/cancel/:flightId', cancelUserFlight);
module.exports = router;
