import React from 'react';
import BookingForm from './BookingForm';
import PriceBreakup from './PriceBreakup';
import CouponCodes from './CouponCodes';
import GuestDetails from './GuestDetails';
import './Bookingform.css';
import { Header } from '../SearchPage/Header';
import { Bottom } from '../HomePage/Bottom';
import styled from 'styled-components';
const Style = styled.div`
  height: 900px;
  background: linear-gradient(
    to top,
    #030779 0%,
    #03053b 50%,
    #03043d 50%,
    #020420 100%
  );
  color:white
  `


const BookingPage = () => {
  return (
    
    <>
    
        <Header/>
        <Style>
      <h1>Review your Booking</h1>
      <div className="row">
      <div className="col-md-1"></div>
      <BookingForm />
      <div className="col-md-1"></div>
      <PriceBreakup />
      <div className="col-md-1"></div>
      <div className="col-md-1"></div>
      <CouponCodes />
      <div className="col-md-1"></div>
      <GuestDetails />
      </div>
      <button type='submit' className='buttonsum'>Book</button>
      </Style>
      <Bottom/>
    </>
  );
};

export default BookingPage;