// models/Hotel.js
const mongoose = require('mongoose');

const HotelSchema = new mongoose.Schema({
    name: { type: String, required: true },
    location: { type: String, required: true },
    roomsAvailable: { type: Number, required: true },
    pricePerNight: { type: Number, required: true },
});

module.exports = mongoose.model('Hotel', HotelSchema);
