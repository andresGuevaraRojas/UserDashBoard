import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import {BrowserRouter, Route, Routes} from 'react-router-dom';

import Auth from './layouts/Auth';
import DashBoard from './layouts/DashBoard';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(    
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Auth/>}>    
        </Route>

        <Route path='/dashboard' element={<DashBoard/>}>
        </Route>
      </Routes>      
    </BrowserRouter>    
);