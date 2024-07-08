const express = require('express');
const router = express.Router();
const bookingController = require('../controller/bookingController');

router.post('/book', bookingController.createBooking);
router.get('/booking/:id', bookingController.getBooking);
router.put('/cancel/:id', bookingController.cancelBooking);

module.exports = router;
