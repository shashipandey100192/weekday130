import React, { Fragment } from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.js";
import "./appmodules/css/global.css";
import Welcomepage from './Welcomepage';
import Userloginpage from './appmodules/users/auth/Userloginpage';
import Userregistor from './appmodules/users/auth/Userregistor';
import Usermainpage from './appmodules/users/dashboard/Usermainpage';





const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path='' element={<Welcomepage/>}></Route>
        <Route path='usermanagement' element={<Userloginpage/>}/>
        <Route path='/usermanagement/registor' element={<Userregistor/>}/>
        <Route path='dashboard' element={<Usermainpage/>}>
        
        </Route>


      </Routes>
    </BrowserRouter>
   

  </React.StrictMode>
);

