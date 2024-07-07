import React, { useContext, useEffect, useState } from 'react';
import axios from 'axios';
import { Pagination, Table, Button } from 'react-bootstrap';
import NavBar from '../NavBar';
import backgroundImage from '../../Assets/flight.jpg';
import './HotelList.css';
import Statecontext from '../Context/Statecontext';

const HotelsList = () => {
  const [hotels, setHotels] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [itemsPerPage] = useState(100);
  const {apiBaseUrl}=useContext(Statecontext);
  useEffect(() => {
    fetchHotels();
  }, []);

  const fetchHotels = async () => {
    try {
       const url=`${apiBaseUrl}admin/hotels`
      const response = await axios.get(url, {
        headers: {
          'Authorization': 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoiNjY4MTMyMjQxZGNiZTgxZGQ1NWM1YWZkIiwibmFtZSI6IlNIRVRFSiIsInJvbGUiOiJhZG1pbiJ9LCJpYXQiOjE3MjAzNjE1NjMsImV4cCI6MTcyMDM2NTE2M30.2YZqJJsD-jZhhgRka4XxZo9MN6scZ3gqKVxWfwSfUYU'
        }
      });
      setHotels(response.data);
    } catch (error) {
      console.error('Error fetching hotels:', error);
    }
  };

  // Calculate current items to display
  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentHotels = hotels.slice(indexOfFirstItem, indexOfLastItem);

  // Change page
  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  return (
    <div style={{ backgroundImage: `linear-gradient(rgba(255,255,255,0.5), rgba(255,255,255,0.5)),url(${backgroundImage})`, backgroundSize: 'cover', minHeight: '100vh' }}>
      <NavBar />
      <div className="container mt-5">
        <h2 className="text-center mb-4">Hotels List</h2>
        <div className="table-responsive">
          <Table striped bordered hover>
            <thead className="thead-fixed">
              <tr className="table-success">
                <th>#</th>
                <th>Hotel Name</th>
                <th>Location</th>
                <th>Rooms Available</th>
                <th>Price per Night</th>
                <th>Actions</th>
              </tr>
            </thead>
            <tbody className="tbody-scroll">
              {currentHotels.map((hotel, index) => (
                <tr className="table-warning" key={hotel._id} style={{ backgroundColor: 'rgba(255, 255, 255, 0.8)' }}>
                  <td>{index + 1}</td>
                  <td>{hotel.name}</td>
                  <td>{hotel.location}</td>
                  <td>{hotel.roomsAvailable}</td>
                  <td>${hotel.pricePerNight}</td>
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
            {Array.from({ length: Math.ceil(hotels.length / itemsPerPage) }, (_, index) => (
              <Pagination.Item key={index + 1} active={index + 1 === currentPage} onClick={() => paginate(index + 1)}>
                {index + 1}
              </Pagination.Item>
            ))}
            <Pagination.Next onClick={() => paginate(currentPage + 1)} disabled={currentPage === Math.ceil(hotels.length / itemsPerPage)} />
          </Pagination>
        </div>
      </div>
    </div>
  );
}

export default HotelsList;
