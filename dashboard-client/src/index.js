import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import {BrowserRouter, Route, Routes} from 'react-router-dom';

import Auth from './layouts/Auth';
import DashBoard from './layouts/DashBoard';
import Login from './pages/Login';
import CreateAccount from './pages/CreateAccount';
import { ProvideAuth } from './providers/AuthProvider';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(    
    <ProvideAuth>
      <BrowserRouter>
        <Routes>

          <Route path='/' element={<Auth/>}>    
            <Route index element={<Login/>}/>
            <Route path='login' element={<Login/>}/>
            <Route path='createaccount' element={<CreateAccount/>}/>
          </Route>
      
          <Route path='/dashboard' element={<DashBoard/>}>
            
          </Route>

        </Routes>      
      </BrowserRouter>    
    </ProvideAuth>    
);