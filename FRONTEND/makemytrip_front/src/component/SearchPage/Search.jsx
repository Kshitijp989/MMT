import { Header } from "./Header";
import { SearchBox } from "./SearchBox";
import { Bottom } from "./Bottom";
import { useState, useEffect, useContext } from "react";
import Statecontext from "../Context/Statecontext";
import axios from "axios";
export const Search = () => {
  const [dataa, setData] = useState([]);

  const handleSelect = async (select) => {
    let isMount = true;
    if (isMount) {
      let promise = async () => {
        const data = await fetch(
          `http://api.aviationstack.com/v1/flights?limit=100&dep_iata=${select.from}&arr_iata=${select.to}&access_key=89feda8620b7905d1b2836c9d6f1f5b6
          `
        );
        let ans = await data.json();
        ans = ans.data;
        // if (ans.length === 0) {
          alert("No planes are available");
        // } else {
        //   setData(ans);
        // }
      };
      promise();
    }
  };
  const handleSort = (e) => {
    if (e === true) {
      const sortedList = [...dataa].sort(
        (a, b) => +a.price - +b.price
      );
      setData(sortedList);
    }
  };
  const handleHigh = (e) => {
    if (e === true) {
      const sortedList = [...dataa].sort(
        (a, b) => +a.price - +b.price
      );
      sortedList.reverse();
      setData(sortedList);
    }
  };
  const { from, setFrom, to, setTo, departureDate, setDepartureDate, returnDate, setReturnDate, travellerClass, setTravellerClass,apiBaseUrl } = useContext(Statecontext);
  

   
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(`${apiBaseUrl}searchFlight`, {
          params: {
            from: from,
            to: to,
            departureDate: departureDate,//"2024-07-15",
            flightClass: travellerClass,//"Economy",
            returnDate: returnDate,//"2024-07-18"
          }
        });
        const ans = response.data;
       
        if (ans.length === 0) {
          alert("No planes are available");
        } else {
          setData(ans);
          console.log(ans, "check");
        }
      } catch (error) {
        console.error("Error fetching data:", error);
        alert("An error occurred while fetching data");
      }
    };

    fetchData();

//    let isMounted = true;

    // if (isMounted) {
    //   let x = localStorage.getItem("myKey");
    //   let y = JSON.parse(x);
      
    //   // const fetchData = async () => {
    //   //   try {
    //   //     const response = await axios.get(`${apiBaseUrl}searchFlight`, {
    //   //       params: {
    //   //         from: "Los Angeles (LAX)",
    //   //         to: "New York (JFK)",
    //   //         departureDate: "2024-07-15",
    //   //         flightClass: "Economy",
    //   //         returnDate: "2024-07-18"
    //   //       }
    //   //     });
    //   //     const ans = response.data.data;
    //   //     console.log(ans, "check");
    //   //     if (ans.length === 0) {
    //   //       alert("No planes are available");
    //   //     } else {
    //   //       setData(ans);
    //   //     }
    //   //   } catch (error) {
    //   //     console.error("Error fetching data:", error);
    //   //     alert("An error occurred while fetching data");
    //   //   }
    //   // };

    //   // fetchData();
    // }

    // return () => {
    //   isMounted = false;
    // };
  }, []);

  const bookData = (e) => {
    localStorage.setItem("buy", JSON.stringify(e));
  };
  return (
    <>
      <Header />
      <SearchBox handle={handleSelect} />
      <Bottom
        data={dataa}
        bookData={bookData}
        sorthigh={handleHigh}
        sorting={handleSort}
      />
    </>
  );
};
