import React, { Fragment } from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.js";
import "./output.css";

import About, { Mypage } from './About';
import "./style.css";
import Mystate from './Mystate';
import Mytelwind from './Mytelwind';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path='' element={
          <Fragment>
        <Mypage/> <Mytelwind></Mytelwind>
        <Mystate></Mystate>
        <About></About>
        </Fragment>
        }/>
        
        

      </Routes>
    </BrowserRouter>

  </React.StrictMode>
);

