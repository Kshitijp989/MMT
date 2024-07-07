import { Header } from "./Header";
import { HotelSearchBox } from "./HotelSearchBox";
import { BottomHotels } from "./BottomHotels";
import { useState, useEffect } from "react";

export const HotelSearch = () => {
  const [data, setData] = useState([]);
  const [select, setSelect] = useState({ location: "", checkin: "", checkout: "" });

  const handleSelect = async (select) => {
    let isMount = true;
    if (isMount) {
    //   let promise = async () => {
    //     const response = await fetch(
    //       `http://api.example.com/v1/hotels?location=${select.location}&checkin=${select.checkin}&checkout=${select.checkout}&access_key=YOUR_ACCESS_KEY`
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
