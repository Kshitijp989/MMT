
import './App.css';

import { BrowserRouter ,Route, Routes  } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import Statecontext from './component/Context/Statecontext'
import { Main } from './component/HomePage/Main';
import { Search } from './component/SearchPage/Search';
import FlightsList from './component/Admin/FlightsList';
import { UnderConstruction } from './component/SearchPage/Underconstruction';
import { HotelSearch } from './component/SearchPage/HotelSearch';

import AddFlightForm from './component/Admin/AddFlightForm';
import HotelsList from './component/Admin/HotelsList';
import { useState } from 'react';
import AddHotelForm from './component/Admin/AddHotelForm';





function App() {
  let apiBaseUrl='http://localhost:5000/api/';
 
  const [from, setFrom] = useState("");
  const [to, setTo] = useState("");
  const [departureDate, setDepartureDate] = useState("");
  const [returnDate, setReturnDate] = useState("");
  const [travellerClass, setTravellerClass] = useState("");
  return (
    <div className="App">
   
    <Statecontext.Provider
    value={{
      apiBaseUrl,from, setFrom, to, setTo, departureDate, setDepartureDate, returnDate, setReturnDate, travellerClass, setTravellerClass 
    }}
    >
      {/* <RouterProvider router={router}/> */}

         <BrowserRouter>
        <div>
          <Routes>
            <Route path="/" element={<Main />} />
            <Route path="/Search" element={<Search />} />
            <Route path="/Flights" element={<Search />} />
            <Route path="/Hotels" element={<HotelSearch />} />
            <Route path="/Homestays" element={<UnderConstruction />} />
            <Route path="/Holidaypackages" element={<UnderConstruction />} />
            <Route path="/Trains" element={<UnderConstruction />} />
            <Route path="/Buses" element={<UnderConstruction />} />
            <Route path="/Cabs" element={<UnderConstruction />} />
            <Route path="/Visa" element={<UnderConstruction />} />
            <Route path="/CahrterFlights" element={<UnderConstruction />} />
            <Route path="/Activities" element={<UnderConstruction />} />
            <Route path="/Admin/FlightList" element={<FlightsList />} />
            <Route path="/admin/flight" element={<FlightsList/>}/>
            <Route path="/admin/hotel" element={<HotelsList/>}/>
            <Route path="/add-flight" element={<AddFlightForm />} />
            <Route path="/add-hotel" element={<AddHotelForm />} />

          </Routes>
        </div>
      </BrowserRouter>
      </Statecontext.Provider>
    </div>
  );
}

export default App;
