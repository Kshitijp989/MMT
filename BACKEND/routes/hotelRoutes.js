const express = require('express');
const router = express.Router();
const adminAuth = require('../middleware/adminAuth');
const hotelController = require('../controller/hotelController');

router.post('/', adminAuth, hotelController.createHotel);
router.get('/', adminAuth, hotelController.getHotels);
router.get('/:id', hotelController.getHotelById); 
router.put('/:id', adminAuth, hotelController.updateHotel);
router.delete('/:id', adminAuth, hotelController.deleteHotel);

module.exports = router;
