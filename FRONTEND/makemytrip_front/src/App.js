import logo from './logo.svg';
import './App.css';

import { BrowserRouter ,Route, Routes, RouterProvider  } from 'react-router-dom';
import { router } from './Routes';
import 'bootstrap/dist/css/bootstrap.min.css';
import Statecontext from './component/Context/Statecontext'
import { Main } from './component/HomePage/Main';
import { Search } from './component/SearchPage/Search';
import FlightsList from './component/Admin/FlightsList';
import AddFlightForm from './component/Admin/AddFlightForm';

function App() {
  let apiBaseUrl='http://localhost:5000/api/';
  return (
    <div className="App">
   
    <Statecontext.Provider
    value={{
      apiBaseUrl
    }}
    >
      {/* <RouterProvider router={router}/> */}
     
         <BrowserRouter>
        <div>
          <Routes>
            <Route path="/" element={<Main />} />
            <Route path="/Search" element={<Search />} />
            <Route path="/admin/flight" element={<FlightsList/>}/>
            <Route path="/add-flight" element={<AddFlightForm />} /> 
          </Routes>
        </div>
      </BrowserRouter>
      </Statecontext.Provider> 
    </div>
  );
}

export default App;
