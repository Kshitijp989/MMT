const HotelBooking = require('../model/HotelBooking');
const User = require('../model/User');
const Hotel = require('../model/Hotel');

const getUserHotelBookings = async (req, res) => {
    const { email } = req.params;
    console.log(`Email received: ${email}`);
  
    try {
      const user = await User.findOne({ email });
      if (!user) {
        console.log(`User with email ${email} not found`);
        return res.status(404).json({ msg: 'User not found' });
      }
  
      const bookings = await HotelBooking.find({ customerEmail: email }).populate('hotelId');
      console.log(`Bookings found: ${bookings.length}`);
      
      res.json(bookings);
    } catch (error) {
      console.error(`Error fetching user hotel bookings: ${error.message}`);
      res.status(500).send('Server error');
    }
};

const cancelUserHotelBooking = async (req, res) => {
    const { bookingId } = req.params;
  
    try {
      const booking = await HotelBooking.findById(bookingId);
      if (!booking) {
        return res.status(404).json({ msg: 'Booking not found' });
      }
  
      booking.status = 'cancelled';
      await booking.save();
  
      res.json({ msg: 'Hotel booking canceled successfully' });
    } catch (error) {
      console.error(`Error canceling hotel booking: ${error.message}`);
      res.status(500).send('Server error');
    }
};
  
module.exports = {
    getUserHotelBookings,
    cancelUserHotelBooking
};
