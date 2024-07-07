import React, { useContext, useEffect, useState } from 'react';
import axios from 'axios';
import { Pagination, Table, Button } from 'react-bootstrap';
import NavBar from '../NavBar';
import backgroundImage from '../../Assets/flight.jpg';
import './FlightsList.css';
import Statecontext from '../Context/Statecontext';

const FlightsList = () => {
  const [flights, setFlights] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [itemsPerPage] = useState(100);
const {apiBaseUrl}=useContext(Statecontext);
  useEffect(() => {
    fetchFlights();
  }, []);

  const fetchFlights = async () => {
    try {
      const url=`${apiBaseUrl}admin/flights`
      const response = await axios.get(url, {
        headers: {
          'Authorization': 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoiNjY4OTAxY2I1M2I3ZTYxZjM3NGRiZGQ2Iiwicm9sZSI6InVzZXIifSwiaWF0IjoxNzIwMjU0OTIzLCJleHAiOjE3MjAyNTg1MjN9.Cv-GEI_s5jTXkDfckG4kjKrE7Mg6NAtkHXUn8iWF2Pk'
        }
      });
      setFlights(response.data);
    } catch (error) {
      console.error('Error fetching flights:', error);
    }
  };

  // Calculate current items to display
  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentFlights = flights.slice(indexOfFirstItem, indexOfLastItem);

  // Change page
  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  return (
    <div style={{ backgroundImage: `linear-gradient(rgba(255,255,255,0.5), rgba(255,255,255,0.5)),url(${backgroundImage})`, backgroundSize: 'cover', minHeight: '100vh' }}>
      <NavBar />
      <div className="container mt-5">
        <h2 className="text-center mb-4">Flights List</h2>
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
                <th>Price</th>
                <th>Actions</th>
              </tr>
            </thead>
            <tbody className="tbody-scroll">
              {currentFlights.map((flight, index) => (
                <tr className="table-warning" key={flight._id} style={{ backgroundColor: 'rgba(255, 255, 255, 0.8)' }}>
                  <td>{index + 1}</td>
                  <td>{flight.flightNumber}</td>
                  <td>{flight.departure}</td>
                  <td>{flight.arrival}</td>
                  <td>{new Date(flight.departureTime).toLocaleString()}</td>
                  <td>{new Date(flight.arrivalTime).toLocaleString()}</td>
                  <td>${flight.price}</td>
                  <td>
                    <Button variant="warning" className="me-2">Edit</Button>
                    <Button variant="danger">Delete</Button>
                  </td>
                </tr>
              ))}
            </tbody>
          </Table>
        </div>

        {/* Pagination */}
        <div className="d-flex justify-content-center">
          <Pagination>
            <Pagination.Prev onClick={() => paginate(currentPage - 1)} disabled={currentPage === 1} />
            {Array.from({ length: Math.ceil(flights.length / itemsPerPage) }, (_, index) => (
              <Pagination.Item key={index + 1} active={index + 1 === currentPage} onClick={() => paginate(index + 1)}>
                {index + 1}
              </Pagination.Item>
            ))}
            <Pagination.Next onClick={() => paginate(currentPage + 1)} disabled={currentPage === Math.ceil(flights.length / itemsPerPage)} />
          </Pagination>
        </div>
      </div>
    </div>
  );
}

export default FlightsList;
