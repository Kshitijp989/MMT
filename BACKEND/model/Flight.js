// models/Flight.js
const mongoose = require('mongoose');

const FlightSchema = new mongoose.Schema({
    flightNumber: { type: String, required: true },
    departure: { type: String, required: true },
    arrival: { type: String, required: true },
    departureTime: { type: Date, required: true },
    arrivalTime: { type: Date, required: true },
    price: { type: Number, required: true },
    oneWayPrice: { type: Number, required: true }, 
    stops: { type: Number, required: true, default: 0 }, 
    stopLocations: [{ type: String }], 
    refundableFares: { type: Boolean, required: true, default: false },
    airlines:  { type: String, required: true }
});


module.exports = mongoose.model('Flight', FlightSchema);
