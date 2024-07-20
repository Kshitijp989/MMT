const Booking = require('../model/Booking');
const User = require('../model/User');
const Flight = require('../model/Flight');

const getUserFlights = async (req, res) => {
    const { email } = req.params;
    console.log(`Email received: ${email}`);
  
    try {
      const user = await User.findOne({ email });
      if (!user) {
        console.log(`User with email ${email} not found`);
        return res.status(404).json({ msg: 'User not found' });
      }
  
      const bookings = await Booking.find({ passengerName: user.name }).populate('flightId');
      console.log(`Bookings found: ${bookings.length}`);
      
      res.json(bookings);
    } catch (error) {
      console.error(`Error fetching user flights: ${error.message}`);
      res.status(500).send('Server error');
    }
  };
  
  module.exports = {
    getUserFlights
  };