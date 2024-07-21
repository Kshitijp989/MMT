import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Table, Button, Alert } from 'react-bootstrap';
import NavBar from '../NavBar';
import backgroundImage from '../../Assets/flight.jpg';
import './UserFlights.css';

const UserFlights = () => {
  const [userFlights, setUserFlights] = useState([]);
  const [error, setError] = useState(null);
  const email=localStorage.getItem("email");

  useEffect(() => {
    fetchUserFlights();
  }, []);

  const fetchUserFlights = async () => {
    try {
      const response = await axios.get(`https://mmt-backend-seven.vercel.app/api/userFlights/${email}`);
      if (response.status === 200) {
        setUserFlights(response.data);
      }
    } catch (err) {
      console.error('Error fetching user flights:', err);
      setError('Failed to fetch user flights. Please try again later.');
    }
  };

  const cancelFlight = async (flightId) => {
    try {
      await axios.put(`http://localhost:5000/api/userFlights/cancel/${flightId}`);
      setUserFlights(userFlights.map(flight =>
        flight._id === flightId ? { ...flight, status: 'canceled' } : flight
      ));
    } catch (err) {
      console.error('Error canceling flight:', err);
      setError('Failed to cancel flight. Please try again later.');
    }
  };

  return (
    <div style={{ backgroundImage: `linear-gradient(rgba(255,255,255,0.5), rgba(255,255,255,0.5)),url(${backgroundImage})`, backgroundSize: 'cover', minHeight: '100vh' }}>
      <NavBar />
      <div className="container mt-5">
        <h2 className="text-center mb-4">Your Booked Flights</h2>
        {error && <Alert variant="danger">{error}</Alert>}
        <div className="table-responsive">
          <Table striped bordered hover>
            <thead className="thead-fixed">
              <tr className="table-success">
                <th>#</th>
                <th>Flight Number</th>
                <th>Departure</th>
                <th>Arrival</th>
                <th>Departure Time</th>
                <th>Arrival Time</th>
                {/* <th>Price</th> */}
                <th>Total Price</th>
                <th>Status</th>
                <th>Actions</th>
              </tr>
            </thead>
            <tbody className="tbody-scroll">
              {userFlights.map((flight, index) => (
                <tr className="table-warning" key={flight._id} style={{ backgroundColor: 'rgba(255, 255, 255, 0.8)' }}>
                  <td>{index + 1}</td>
                  <td>{flight.flightId.flightNumber}</td>
                  <td>{flight.flightId.departure}</td>
                  <td>{flight.flightId.arrival}</td>
                  <td>{new Date(flight.flightId.departureTime).toLocaleString()}</td>
                  <td>{new Date(flight.flightId.arrivalTime).toLocaleString()}</td>
                  {/* <td>${flight.flightId.price}</td> */}
                  <td>${flight.totalPrice}</td>
                  <td>{flight.status === 'booked' ? 'Booked' : 'Canceled'}</td>
                  <td>
                  {flight.status === 'booked' ? (
                      <Button variant="danger" onClick={() => cancelFlight(flight._id)}>Cancel</Button>
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

export default UserFlights;
