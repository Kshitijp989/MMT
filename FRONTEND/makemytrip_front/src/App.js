import logo from './logo.svg';
import './App.css';

import { BrowserRouter as Router,Route, Routes, RouterProvider  } from 'react-router-dom';
import { router } from './Routes';
import 'bootstrap/dist/css/bootstrap.min.css';
import Statecontext from './component/Context/Statecontext';

function App() {
  let apiBaseUrl='http://localhost:5000/api/';
  return (
    <div className="App">
   
    <Statecontext.Provider
    value={{
      apiBaseUrl
    }}
    >
      <RouterProvider router={router}/>
      </Statecontext.Provider>
    </div>
  );
}

export default App;
