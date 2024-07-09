import { Header } from "./Header";
import { HotelSearchBox } from "./HotelSearchBox";
import { BottomHotels } from "./BottomHotels";
import { useState, useEffect,useContext } from "react";
import Statecontext from '../Context/Statecontext';
import axios from "axios";

export const HotelSearch = () => {
  const [data, setData] = useState([]);
  const [wifi, setWifi] = useState();
  const [housekeeping, setHousekeeping] = useState();
  const [acHeating, setAcHeating] = useState();
  const [breakfast, setBreakfast] = useState();
  const [range, setRange] = useState();
  const { location, setLocation, checkIn, setCheckIn, checkOut, setcheckOut, apiBaseUrl } = useContext(Statecontext);
  
  const [select, setSelect] = useState({ location: "", checkin: "", checkout: "" });

  const handleSelect = async (select) => {
   
    setLocation(select.location);
    setCheckIn(select.checkIn);
    setcheckOut(select.checkOut);
   };

   useEffect(()=>{
    fetchData();
  },[location,checkIn,checkOut])

  const handleSort = (e) => {
    if (e === true) {
      const sortedList = [...data].sort(
        (a, b) => a.price - b.price
      );
      setData(sortedList);
    }
  };

  const handleHigh = (e) => {
    if (e === true) {
      const sortedList = [...data].sort(
        (a, b) => a.pricePerNight - b.pricePerNight
      );
      sortedList.reverse();
      setData(sortedList);
    }
  };

  const handleWifi = (e) => {
    if (e === true) {
      setWifi(e);
      fetchDataByFilter()
    }else{
      fetchData();
    }
  };

  const handleHousekeeping = (e) => {
    if (e === true) {
      setHousekeeping(e);
      fetchDataByFilter()
    }else{
      fetchData();
    }
  };

  const handleAcHeating = (e) => {
    if (e === true) {
      setAcHeating(e);
      fetchDataByFilter()
    }else{
      fetchData();
    }
  };

  const HandleBreakfast = (e) => {
    if (e === true) {
      setBreakfast(e);
      fetchDataByFilter()
    }else{
      fetchData();
    }
  };

  const handleRange = (e) => {
    setRange(e)
    if (e != 0) {
      const sortedList = [...data].map(
        (a) => a.pricePerNight < e
      );
      setData(sortedList);
    }
  };

  const fetchData = async () => {
    try {
      const response = await axios.get(`${apiBaseUrl}searchHotel`, {
        params: {
          city: location,
          checkIn: checkIn,
          checkOut: checkOut,//"2024-07-15",
        }
      });
      const ans = response.data;
        setData(ans);

    } catch (error) {
      console.error("Error fetching data:", error);
      alert("An error occurred while fetching data");
    }
  };

  const fetchDataByFilter = async () => {
  try {
    const requestBody = {
      city: location,
      checkIn: checkIn,
      checkOut: checkOut,
      freeWiFi: wifi,
      complimentaryBreakfast : breakfast,
      housekeeping : housekeeping,
      airConditioningHeating : acHeating,
      Range : range

    };

    const response = await axios.post(`${apiBaseUrl}searchFlight/searchFlightsByPrice`, requestBody);

    const ans = response.data;

      setData(ans);
      console.log(ans, "check");
    // }
  } catch (error) {
    console.error("Error fetching data:", error);
    alert("An error occurred while fetching data");
  }
}

  return (
    <>
      <Header />
      <HotelSearchBox handle={handleSelect} />
      <BottomHotels
        data={data}
        sorthigh={handleHigh}
        sorting={handleSort}
        handleWifi={handleWifi}
        handleHousekeeping={handleHousekeeping}
        handleAcHeating={handleAcHeating}
        HandleBreakfast={HandleBreakfast}
        handleRange={handleRange}


      />
    </>
  );
};
