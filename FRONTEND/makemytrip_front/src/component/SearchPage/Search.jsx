import { Header } from "./Header";
import { SearchBox } from "./SearchBox";
import { Bottom } from "./Bottom";
import { useState, useEffect, useContext } from "react";
import Statecontext from "../Context/Statecontext";
import axios from "axios";
export const Search = () => {
  const [dataa, setData] = useState([]);
  const [refund, setRefund] = useState();
  const [arrOfAirlines,setarrOfAirlines]=useState([]);
  const { from, setFrom, to, setTo, departureDate, setDepartureDate, returnDate, setReturnDate, travellerClass, setTravellerClass,apiBaseUrl } = useContext(Statecontext);
  
  const handleSelect = async (select) => {
   
   setFrom(select.from);
   setTo(select.to);
   setDepartureDate(select.DepartDate);
   setReturnDate(select.ReturnDate)
   setTravellerClass(select.TravellerClass)
  };

  useEffect(()=>{
    fetchData();
  },[from,to,departureDate,returnDate,travellerClass])
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
        (a, b) => +b.price - +a.price
      );
      setData(sortedList);
    }
    
  };
  const handleRefund = (e) => {
    console.log("check e vlaue",e)
    // setRefund(!refund);
    if (e === true) {
      console.log(e,"check return parent")
      setRefund(e);
      fetchDataByFilter()
    }else{
      if(from!=""&&to!=""&&departureDate!=""&&returnDate!=""&&travellerClass!=""){
      fetchData();
      }
    }
  };
  
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
     
      // if (ans.length === 0) {
      //   alert("No planes are available");
      // } else {

        setData(ans);
        console.log(ans, "check");
      // }
    } catch (error) {
      console.error("Error fetching data:", error);
      alert("An error occurred while fetching data");
    }
  };
  const fetchDataFirst = async () => {
    try {
      const response = await axios.get(`${apiBaseUrl}searchFlight/all`);
      const ans = response.data;
     
     
        setData(ans);
        console.log(ans, "check");
     
    } catch (error) {
      console.error("Error fetching data:", error);
      alert("An error occurred while fetching data");
    }
  };

  const fetchDataByFilter = async () => {
    try {
      const requestBody = {
        from: from,
        to: to,
        departureDate: departureDate, //"2024-07-15",
        flightClass: travellerClass, //"Economy",
        returnDate: returnDate, //"2024-07-18",
        refundableFares: refund,
        airlines:arrOfAirlines,
      };
  
      const response = await axios.post(`${apiBaseUrl}searchFlight/searchFlightsByPrice`, requestBody);
  
      const ans = response.data;
  
      // if (ans.length === 0) {
      //   alert("No planes are available");
      // } else {

        setData(ans);
        console.log(ans, "check");
      // }
    } catch (error) {
      console.error("Error fetching data:", error);
      alert("An error occurred while fetching data");
    }
  };
  
  useEffect(() => {
   

    setarrOfAirlines([]);
    if(from!=""&&to!=""&&departureDate!=""&&returnDate!=""&&travellerClass!=""){
      fetchData();}
      else{
        fetchDataFirst();
      }


  }, []);

  useEffect(()=>{
    console.log("useffect hit of refund")
    if(refund===true){
      console.log('in refund')
    fetchDataByFilter();
    }
    else{
      fetchDataFirst();
    }
  },[refund])
  const bookData = (e) => {
    localStorage.setItem("buy", JSON.stringify(e));
  };
  const handleAirlines=(e)=>{
    console.log(e,"check airline data");
    setarrOfAirlines(e);
   
  }
  useEffect(()=>{
    console.log(arrOfAirlines,"arr");
    if (arrOfAirlines.length > 0) {
      console.log('in arrof airlines')
      fetchDataByFilter();
    }
  },[arrOfAirlines])
  return (
    <>
      <Header />
      <SearchBox handle={handleSelect} />
      <Bottom
        data={dataa}
        bookData={bookData}
        sorthigh={handleHigh}
        sorting={handleSort}
        handleRefund={handleRefund}
        handleAirlines={handleAirlines}
      />
    </>
  );
};
