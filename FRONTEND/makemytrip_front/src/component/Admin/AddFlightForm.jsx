import React, { useContext, useState } from 'react';
import axios from 'axios';
import { Form, Button, Container } from 'react-bootstrap';
import NavBar from '../NavBar';
import backgroundImage from '../../Assets/flight.jpg';
import Statecontext from '../Context/Statecontext';
import { useNavigate } from "react-router-dom";
import './FlightsList.css';

const AddFlightForm = () => {
  const navigate = useNavigate();
  const { apiBaseUrl } = useContext(Statecontext);
  const [flight, setFlight] = useState({
    flightNumber: '',
    departure: '',
    arrival: '',
    departureTime: '',
    arrivalTime: '',
    price: '',
    oneWayPrice: '',
    oneWayPriceEconomy: '',
    oneWayPricePremium: '',
    stops: '',
    stopLocations: '',
    refundableFares: false,
    cityName: '',
    airportCode: '',
    airportName: '',
    class: ''
  });

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFlight({
      ...flight,
      [name]: type === 'checkbox' ? checked : value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const url = `${apiBaseUrl}admin/flights`;
      await axios.post(url, flight, {
        headers: {
          'Authorization': 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoiNjY4YTdjOTM2NjA3OGM2YWNlNmM5MWY2IiwibmFtZSI6ImFkbWluIiwicm9sZSI6ImFkbWluIn0sImlhdCI6MTcyMDM1MjU1NCwiZXhwIjoxNzIwMzU2MTU0fQ.XfyiNfcR2-3niBfT69LRPfHJ5aNmzSjr9ZCj3H8SYcU'
        }
      });
      navigate('/');
    } catch (error) {
      console.error('Error adding flight:', error);
    }
  };

  return (
    <div style={{ backgroundImage: `linear-gradient(rgba(255,255,255,0.5), rgba(255,255,255,0.5)),url(${backgroundImage})`, backgroundSize: 'cover', minHeight: '100vh' }}>
      <NavBar />
      <Container className="mt-5">
        <h2 className="text-center mb-4">Add New Flight</h2>
        <Form onSubmit={handleSubmit}>
          <div class="col-md-12">
            <div class="row">
          <Form.Group controlId="formFlightNumber" class="col-md-4">
            <Form.Label>Flight Number</Form.Label>
            <Form.Control
              type="text"
              placeholder="Enter flight number"
              name="flightNumber"
              value={flight.flightNumber}
              onChange={handleChange}
              required
            />
          </Form.Group>

          <Form.Group controlId="formDeparture" class="col-md-4">
            <Form.Label>Departure</Form.Label>
            <Form.Control
              type="text"
              placeholder="Enter departure location"
              name="departure"
              value={flight.departure}
              onChange={handleChange}
              required
            />
          </Form.Group>

          <Form.Group controlId="formArrival" class="col-md-4">
            <Form.Label>Arrival</Form.Label>
            <Form.Control
              type="text"
              placeholder="Enter arrival location"
              name="arrival"
              value={flight.arrival}
              onChange={handleChange}
              required
            />
          </Form.Group>

          <Form.Group controlId="formDepartureTime" class="col-md-4">
            <Form.Label>Departure Time</Form.Label>
            <Form.Control
              type="datetime-local"
              name="departureTime"
              value={flight.departureTime}
              onChange={handleChange}
              required
            />
          </Form.Group>

          <Form.Group controlId="formArrivalTime" class="col-md-4">
            <Form.Label>Arrival Time</Form.Label>
            <Form.Control
              type="datetime-local"
              name="arrivalTime"
              value={flight.arrivalTime}
              onChange={handleChange}
              required
            />
          </Form.Group>

          <Form.Group controlId="formPrice" class="col-md-4">
            <Form.Label>Price</Form.Label>
            <Form.Control
              type="number"
              placeholder="Enter price"
              name="price"
              value={flight.price}
              onChange={handleChange}
              required
            />
          </Form.Group>

          <Form.Group controlId="formOneWayPrice" class="col-md-4">
            <Form.Label>One-Way Price</Form.Label>
            <Form.Control
              type="number"
              placeholder="Enter one-way price"
              name="oneWayPrice"
              value={flight.oneWayPrice}
              onChange={handleChange}
              required
            />
          </Form.Group>

          <Form.Group controlId="formOneWayPriceEconomy" class="col-md-4">
            <Form.Label>One-Way Price (Economy)</Form.Label>
            <Form.Control
              type="number"
              placeholder="Enter one-way price for economy class"
              name="oneWayPriceEconomy"
              value={flight.oneWayPriceEconomy}
              onChange={handleChange}
              required
            />
          </Form.Group>

          <Form.Group controlId="formOneWayPricePremium" class="col-md-4">
            <Form.Label>One-Way Price (Premium)</Form.Label>
            <Form.Control
              type="number"
              placeholder="Enter one-way price for premium class"
              name="oneWayPricePremium"
              value={flight.oneWayPricePremium}
              onChange={handleChange}
              required
            />
          </Form.Group>

          <Form.Group controlId="formStops" class="col-md-4">
            <Form.Label>Stops</Form.Label>
            <Form.Control
              type="number"
              placeholder="Enter number of stops"
              name="stops"
              value={flight.stops}
              onChange={handleChange}
              required
              />
          </Form.Group>
          </div>
          </div>
</Form>
</Container>
</div>
  )}

  export default AddFlightForm