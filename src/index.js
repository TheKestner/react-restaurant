import React from 'react';
import ReactDOM from 'react-dom';
import {
  BrowserRouter,
  Route,
  Routes
} from 'react-router-dom';
import './index.css';
import App from './App';
import 'bootstrap/dist/css/bootstrap.min.css';


ReactDOM.render(
  
  <BrowserRouter>
   <Routes>
     <Route path="/" element={<App />}>

       </Route>
     </Routes>
    </BrowserRouter>,
    document.getElementById('app')
);


