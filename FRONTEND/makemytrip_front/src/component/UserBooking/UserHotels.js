import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Table, Button, Alert } from 'react-bootstrap';
import NavBar from '../NavBar';
import backgroundImage from '../../Assets/hotel.jpg';
import './UserHotels.css';

const UserHotels = () => {
  const [userHotelBookings, setUserHotelBookings] = useState([]);
  const [error, setError] = useState(null);
  const email = localStorage.getItem('email');
  const token = localStorage.getItem('token');

  useEffect(() => {
    fetchUserHotelBookings();
  }, []);

  const fetchUserHotelBookings = async () => {
    try {
      const response = await axios.get(`https://mmt-backend-seven.vercel.app/api/userHotelBookings/${email}`, {
        headers: {
          Authorization: `Bearer ${token}`
        }
      });
      if (response.status === 200) {
        setUserHotelBookings(response.data);
      }
    } catch (err) {
      console.error('Error fetching user hotel bookings:', err);
      setError('Failed to fetch user hotel bookings. Please try again later.');
    }
  };

  const cancelHotelBooking = async (bookingId) => {
    try {
      await axios.put(`https://mmt-backend-seven.vercel.app/api/userHotelBookings/cancel/${bookingId}`, {}, {
        headers: {
          Authorization: `Bearer ${token}`
        }
      });
      setUserHotelBookings(userHotelBookings.map(booking =>
        booking._id === bookingId ? { ...booking, status: 'cancelled' } : booking
      ));
    } catch (err) {
      console.error('Error canceling hotel booking:', err);
      setError('Failed to cancel hotel booking. Please try again later.');
    }
  };

  return (
    <div style={{ backgroundImage: `linear-gradient(rgba(255,255,255,0.5), rgba(255,255,255,0.5)),url(${backgroundImage})`, backgroundSize: 'cover', minHeight: '100vh' }}>
      <NavBar />
      <div className="container mt-5">
        <h2 className="text-center mb-4">Your Hotel Bookings</h2>
        {error && <Alert variant="danger">{error}</Alert>}
        <div className="table-responsive">
          <Table striped bordered hover>
            <thead className="thead-fixed">
              <tr className="table-success">
                <th>#</th>
                <th>Hotel Name</th>
                <th>Location</th>
                <th>Booking Date</th>
                <th>Total Price</th>
                <th>Status</th>
                <th>Actions</th>
              </tr>
            </thead>
            <tbody className="tbody-scroll">
              {userHotelBookings.map((booking, index) => (
                <tr className="table-warning" key={booking._id} style={{ backgroundColor: 'rgba(255, 255, 255, 0.8)' }}>
                  <td>{index + 1}</td>
                  <td>{booking.hotelId.name}</td>
                  <td>{booking.hotelId.location}</td>
                  <td>{new Date(booking.bookingDate).toLocaleString()}</td>
                  <td>${booking.totalPrice}</td>
                  <td>{booking.status === 'booked' ? 'Booked' : <span style={{ color: 'red', fontWeight: 'bold' }}>Canceled</span>}</td>
                  <td>
                    {booking.status === 'booked' ? (
                      <Button variant="danger" onClick={() => cancelHotelBooking(booking._id)}>Cancel</Button>
                    ) : (
                      <span style={{ color: 'red', fontWeight: 'bold' }}>Canceled</span>
                    )}
                  </td>
                </tr>
              ))}
            </tbody>
          </Table>
        </div>
      </div>
    </div>
  );
}

export default UserHotels;
