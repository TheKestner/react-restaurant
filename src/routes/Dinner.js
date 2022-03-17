import React, { useState, useEffect} from 'react';
import { getData } from '../utils/data';

export default function Dinner() {
    const [apps, setApps] = useState([]);
    useEffect(() => {
        getData()
        .then((data) => {
        setApps(data)
        })
    
    },[]);

    return (
        <div>
            <h2>Dinner:</h2>
            {apps.map((app) => <App key={app.id} app={app} />)}
        </div>
    );
}

const App = ({ app }) => {
    return (
      <div>
      {app.title}
      </div>
    )
  }