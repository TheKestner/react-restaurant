import React from 'react';
import ReactDOM from 'react-dom';
import {
  BrowserRouter,
  Route,
  Routes
} from 'react-router-dom';
import './index.css';

import 'bootstrap/dist/css/bootstrap.min.css';
import App from './App';
import Appitizers from './routes/Appitizers';
import Lunch from './routes/Lunch';
import Dinner from './routes/Dinner';

ReactDOM.render(
  
  <BrowserRouter>
   <Routes>
     <Route path="/" element={<App />}>
     <Route path="appitizers" element={<Appitizers />} />
     <Route path="lunch" element={<Lunch />} />
     <Route path="dinner" element={<Dinner />} />
       </Route>
     </Routes>
    </BrowserRouter>,
    document.getElementById('app')
);


