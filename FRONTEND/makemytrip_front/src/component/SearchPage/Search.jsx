import { Header } from "./Header";
import { SearchBox } from "./SearchBox";
import { Bottom } from "./Bottom";
import { useState, useEffect, useContext } from "react";
import Statecontext from "../Context/Statecontext";
import axios from "axios";

export const Search = () => {
  const [dataa, setData] = useState([]);
  const [refund, setRefund] = useState(false);
  const [arrOfAirlines, setArrOfAirlines] = useState([]);
  const { from, setFrom, to, setTo, departureDate, setDepartureDate, returnDate, setReturnDate, travellerClass, setTravellerClass, apiBaseUrl } = useContext(Statecontext);

  const handleSelect = async (select) => {
    setFrom(select.from);
    setTo(select.to);
    setDepartureDate(select.DepartDate);
    setReturnDate(select.ReturnDate);
    setTravellerClass(select.TravellerClass);
  };

  const handleSort = (e) => {
    const sortedList = [...dataa].sort((a, b) => e ? +a.price - +b.price : +b.price - +a.price);
    setData(sortedList);
  };

  const handleRefund = (e) => {
    setRefund(e);
  };

  const fetchData = async () => {
    try {
      const response = await axios.get(`${apiBaseUrl}searchFlight`, {
        params: {
          from: from,
          to: to,
          departureDate: departureDate,
          flightClass: travellerClass,
          returnDate: returnDate,
        }
      });
      setData(response.data);
      console.log(response.data, "check");
    } catch (error) {
      console.error("Error fetching data:", error);
      alert("An error occurred while fetching data");
    }
  };

  const fetchDataFirst = async () => {
    try {
      const response = await axios.get(`${apiBaseUrl}searchFlight/all`);
      setData(response.data);
      console.log(response.data, "check");
    } catch (error) {
      console.error("Error fetching data:", error);
      alert("An error occurred while fetching data");
    }
  };

  const fetchDataByFilter = async () => {
    if (from === "" && to === "" && departureDate === "" && returnDate === "" && travellerClass === "" && arrOfAirlines.length === 0) {
      fetchDataFirst();
    } else {
      try {
        const requestBody = {
          from: from,
          to: to,
          departureDate: departureDate,
          flightClass: travellerClass,
          returnDate: returnDate,
          refundableFares: refund,
          airlines: arrOfAirlines,
        };

        const response = await axios.post(`${apiBaseUrl}searchFlight/searchFlightsByPrice`, requestBody);
        setData(response.data);
        console.log(response.data, "check");
      } catch (error) {
        console.error("Error fetching data:", error);
        alert("An error occurred while fetching data");
      }
    }
  };

  useEffect(() => {
    if (from && to && departureDate && returnDate && travellerClass) {
      fetchData();
    } else {
      fetchDataFirst();
    }
  }, [from, to, departureDate, returnDate, travellerClass]);

  useEffect(() => {
    if (refund) {
      fetchDataByFilter();
    } else {
      fetchDataFirst();
    }
  }, [refund]);

  useEffect(() => {
    if (arrOfAirlines.length > 0) {
      fetchDataByFilter();
    }
  }, [arrOfAirlines]);

  const bookData = (e) => {
    localStorage.setItem("buy", JSON.stringify(e));
  };

  const handleAirlines = (e) => {
    setArrOfAirlines(e);
  };

  return (
    <>
      <Header />
      <SearchBox handle={handleSelect} />
      <Bottom
        data={dataa}
        bookData={bookData}
        sorthigh={handleSort}
        sorting={handleSort}
        handleRefund={handleRefund}
        handleAirlines={handleAirlines}
      />
    </>
  );
};
