import React from 'react';

const BookingForm = () => {
  return (
    <div className="booking-form">
      <div className="hotel-info">
        <h2>The Hq</h2>
        <p>Swatantra Path, Vasco da Gama, Goa, India</p>
      </div>
      <div className="check-in-out">
        <div>
          <label>Check In</label>
          <p>Tue 9 Jul 2024 <span>2 PM</span></p>
        </div>
        <div>
          <label>Check Out</label>
          <p>Wed 10 Jul 2024 <span>12 PM</span></p>
        </div>
      </div>
      <div className="room-info">
        <h3>Deluxe Room</h3>
        <p>2 Adults</p>
        <p>Room Only</p>
        <p>No meals included</p>
        <p className="non-refundable">Non-Refundable</p>
      </div>
      <div className="upgrade-stay">
        <input type="checkbox" id="breakfast" />
        <label htmlFor="breakfast">Add Breakfast for ₹ 261 for all guests</label>
      </div>
    </div>
  );
};

export default BookingForm;