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
import UserHomepage from './appmodules/users/dashboard/UserHomepage';
import UserListpage from './appmodules/users/dashboard/UserListpage';
import Apipage from './appmodules/users/dashboard/Apipage';
import Apperror from './appmodules/sharecomponents/Apperror';
import Productdetails from './appmodules/users/dashboard/Productdetails';
import Graphpage from './appmodules/users/dashboard/Graphpage';
import Parentspage from './appmodules/users/dashboard/propspage/Parentspage';





const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path='' element={<Welcomepage/>}></Route>
        <Route path='usermanagement' element={<Userloginpage/>}/>
        <Route path='/usermanagement/registor' element={<Userregistor/>}/>
        <Route path='dashboard' element={<Usermainpage/>}>
            <Route path="" element={<UserHomepage/>}></Route>
            <Route path="userlist" element={<UserListpage/>}></Route>
            <Route path="api" element={<Apipage/>}></Route>
            <Route path="api/detailspage/:id" element={<Productdetails/>}></Route>
            <Route path="graph" element={<Graphpage/>}></Route>
            <Route path="props" element={<Parentspage/>}></Route>
            
            <Route path="*" element={<Apperror/>}></Route>

        </Route>
         <Route path="*" element={<Apperror/>}></Route>



      </Routes>
    </BrowserRouter>
   

  </React.StrictMode>
);

