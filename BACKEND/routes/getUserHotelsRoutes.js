const express = require('express');
const router = express.Router();
const { getUserHotelBookings, cancelUserHotelBooking } = require('../controller/getUserHotelsController');
const userAuth = require("../middleware/userAuth");

router.get('/userHotelBookings/:email', userAuth, getUserHotelBookings);
router.put('/userHotelBookings/cancel/:bookingId', userAuth, cancelUserHotelBooking);

module.exports = router;
