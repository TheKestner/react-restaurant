import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import 'bootstrap/dist/css/bootstrap.min.css';


ReactDOM.render(
  <browserRouter>
   <Routes>
     <Route path="/" element={<App />}>

     </Route>
   </Routes>
  </browserRouter>
  , document.getElementById('app')
);


