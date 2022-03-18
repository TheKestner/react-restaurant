import React, { useState, useEffect} from 'react';
import { getData } from '../utils/data';

export default function Lunch() {
    const [apps, setApps] = useState([]);
    useEffect(() => {
        getData()
        .then((data) => {
        setApps(data)
        })
    
    },[]);

    return (
        <div>
            <h2>Lunch:</h2>
            {apps
            .filter(app => app.category.title === 'Sandwiches')
            .map((app) => <App key={app.id} app={app} />)}
        </div>
    );
}

const App = ({ app }) => {
    return (
      <div className="food">
      {app.title} Price: {app.price} 
      <div className="des">Description: {app.description}</div>
      </div>
    )
  }