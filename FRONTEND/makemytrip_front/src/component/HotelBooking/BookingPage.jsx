import React from 'react';
import BookingForm from './BookingForm';
import PriceBreakup from './PriceBreakup';
import CouponCodes from './CouponCodes';
import GuestDetails from './GuestDetails';
import './BookingPage.css';
import { Header } from '../SearchPage/Header';
import { Bottom } from '../HomePage/Bottom';
import styled from 'styled-components';
const Style = styled.div`
  height: 700px;
  background: linear-gradient(
    to top,
    #030779 0%,
    #03053b 50%,
    #03043d 50%,
    #020420 100%
  );
  color:white`


const BookingPage = () => {
  return (
    
    <>
    
        <Header/>
        <Style>
      <h1>Review your Booking</h1>
      <BookingForm />
      <PriceBreakup />
      <CouponCodes />
      <GuestDetails />
      </Style>
      <Bottom/>
    </>
  );
};

export default BookingPage;