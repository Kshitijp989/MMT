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
  
  const cancelUserFlight = async (req, res) => {
    const { flightId } = req.params;
  
    try {
      const booking = await Booking.findById(flightId);
      if (!booking) {
        return res.status(404).json({ msg: 'Booking not found' });
      }
  
      booking.status = 'cancelled';  // Corrected enum value
      await booking.save();
  
      res.json({ msg: 'Flight canceled successfully' });
    } catch (error) {
      console.error(`Error canceling flight: ${error.message}`);
      res.status(500).send('Server error');
    }
  };
  
  module.exports = {
    getUserFlights,
    cancelUserFlight
  };