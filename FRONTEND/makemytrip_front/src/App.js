import logo from './logo.svg';
import './App.css';

import { BrowserRouter ,Route, Routes, RouterProvider  } from 'react-router-dom';
import { router } from './Routes';
import 'bootstrap/dist/css/bootstrap.min.css';
import Statecontext from './component/Context/Statecontext'
import { Main } from './component/HomePage/Main';
import { Search } from './component/SearchPage/Search';

function App() {
  let apiBaseUrl='http://localhost:5000/api/';
  return (
    <div className="App">
{/*    
    <Statecontext.Provider
    value={{
      apiBaseUrl
    }}
    >
      <RouterProvider router={router}/>
      </Statecontext.Provider> */}
         <BrowserRouter>
        <div>
          <Routes>
            <Route path="/" element={<Main />} />
            <Route path="/Search" element={<Search />} />

          </Routes>
        </div>
      </BrowserRouter>
    </div>
  );
}

export default App;
