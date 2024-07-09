import { Header } from "./Header";
import { HotelSearchBox } from "./HotelSearchBox";
import { BottomHotels } from "./BottomHotels";
import { useState, useEffect } from "react";

export const HotelSearch = () => {
  const [data, setData] = useState([]);
  const [select, setSelect] = useState({ location: "", checkin: "", checkout: "" });

  const handleSelect = async (select) => {
    setSelect(select); // Update state with selected location, checkin, checkout
    fetchHotels(select.location); // Fetch hotels based on selected location
  };

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
        (a, b) => a.price - b.price
      );
      sortedList.reverse();
      setData(sortedList);
    }
  };
  const fetchHotels = async (city) => {
    try {
      const response = await fetch(`http://localhost:5000/api/searchHotel?city=${city}`);
      if (response.ok) {
        const result = await response.json();
        setData(result); // Update state with fetched hotel data
      } else {
        console.error("Failed to fetch hotels");
      }
    } catch (error) {
      console.error("Error fetching hotels:", error);
    }
  };
  useEffect(() => {
    let isMounted = true;
    if (isMounted) {
    //   let x = localStorage.getItem("hotelKey");
    //   let y = JSON.parse(x);
    //   let promise = async () => {
    //     const response = await fetch(
    //       `http://api.example.com/v1/hotels?location=${y.location}&checkin=${y.checkin}&checkout=${y.checkout}&access_key=YOUR_ACCESS_KEY`
    //     );
    //     let result = await response.json();
    //     result = result.data;
    //     if (result.length === 0) {
    //       alert("No hotels are available");
    //     } else {
    //       setData(result);
    //     }
    //   };
    //   promise();
    }
  }, []);

  const bookData = (e) => {
    localStorage.setItem("hotelBooking", JSON.stringify(e));
  };

  return (
    <>
      <Header />
      <HotelSearchBox handle={handleSelect} />
      <BottomHotels
        data={data}
        bookData={bookData}
        sorthigh={handleHigh}
        sorting={handleSort}
      />
    </>
  );
};
