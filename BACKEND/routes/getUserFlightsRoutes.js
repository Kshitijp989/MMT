const express = require('express');
const router = express.Router();
const { getUserFlights } = require('../controller/getUserFlightsController');
const userAuth = require("../middleware/userAuth");

router.get('/userFlights/:email', getUserFlights);

module.exports = router;
