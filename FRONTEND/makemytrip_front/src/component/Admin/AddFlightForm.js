import React, { useState } from 'react';
import axios from 'axios';
import {
    MDBBtn,
    MDBContainer,
    MDBRow,
    MDBCol,
    MDBCard,
    MDBCardBody,
    MDBInput,
    MDBRadio
} from 'mdb-react-ui-kit';
import './AddFlightForm.css';
const AddFlightForm = () => {
  const [flightData, setFlightData] = useState({
    flightNumber: '',
    departure: '',
    arrival: '',
    departureTime: '',
    arrivalTime: '',
    price: 0,
    oneWayPrice: 0,
    oneWayPriceEconomy: 0,
    oneWayPricePremium: 0,
    stops: 0,
    stopLocations: [],
    refundableFares: false,
    airlines: '',
    cityName: '',
    airportCode: '',
    airportName: '',
    class: '',
  });
  const [validated, setValidated] = useState(false);

  const handleSubmit = async (event) => {
    const form = event.currentTarget;
    event.preventDefault();
    event.stopPropagation();

    if (form.checkValidity() === true) {
      try {
        const apiUrl = '/api/admin/flights'; // Replace with your API endpoint
        const response = await axios.post(apiUrl, flightData);
        console.log('Flight added:', response.data);
      } catch (error) {
        console.error('Error adding flight:', error);
      }
    }

    setValidated(true);
  };

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFlightData({ ...flightData, [name]: value });
  };

  return (
    <MDBContainer fluid style={{ backgroundColor: 'lightblue', padding: '2rem' }} >
      <MDBRow className='justify-content-center align-items-center m-5'>
        <MDBCard>
          <MDBCardBody className='px-4'>
            <h3 className="fw-bold mb-4 pb-2 pb-md-0 mb-md-5">Registration Form</h3>
            <form noValidate validated={validated.toString()} onSubmit={handleSubmit}>
              <MDBRow>
                <MDBCol md='6'>
                  <MDBInput wrapperClass='mb-4' label='First Name' size='lg' id='form1' type='text' onChange={handleChange} />
                </MDBCol>
                <MDBCol md='6'>
                  <MDBInput wrapperClass='mb-4' label='Last Name' size='lg' id='form2' type='text' onChange={handleChange} />
                </MDBCol>
              </MDBRow>
              <MDBRow>
                <MDBCol md='6'>
                  <MDBInput wrapperClass='mb-4' label='Birthday' size='lg' id='form3' type='text' onChange={handleChange} />
                </MDBCol>
                <MDBCol md='6' className='mb-4'>
                  <h6 className="fw-bold">Gender: </h6>
                  <MDBRadio name='inlineRadio' id='inlineRadio1' value='Female' label='Female' inline onChange={handleChange} />
                  <MDBRadio name='inlineRadio' id='inlineRadio2' value='Male' label='Male' inline onChange={handleChange} />
                  <MDBRadio name='inlineRadio' id='inlineRadio3' value='Other' label='Other' inline onChange={handleChange} />
                </MDBCol>
              </MDBRow>
              <MDBRow>
                <MDBCol md='6'>
                  <MDBInput wrapperClass='mb-4' label='Email' size='lg' id='form4' type='email' onChange={handleChange} />
                </MDBCol>
                <MDBCol md='6'>
                  <MDBInput wrapperClass='mb-4' label='Phone Number' size='lg' id='form5' type='tel' onChange={handleChange} />
                </MDBCol>
              </MDBRow>
              <div className="mb-4">
                <label htmlFor="selectOption" className="form-label">Choose option</label>
                <select className="form-select" id="selectOption" name="option" required onChange={handleChange}>
                  <option value="">Choose option</option>
                  <option value="subject1">Subject 1</option>
                  <option value="subject2">Subject 2</option>
                  <option value="subject3">Subject 3</option>
                </select>
                <div className="invalid-feedback">
                  Please choose an option.
                </div>
              </div>
              <MDBBtn className='mb-4' size='lg' type="submit">Submit</MDBBtn>
            </form>
          </MDBCardBody>
        </MDBCard>
      </MDBRow>
    </MDBContainer>
  );
};

export default AddFlightForm;
