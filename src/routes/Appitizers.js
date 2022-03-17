import React, { useState, useEffect} from 'react';
import { getData } from '../utils/data';

export default function Appitizers() {
    const [apps, setApps] = useState([]);
    useEffect(() => {
        getData()
        .then((data) => {
        setApps(data)
        })
    
    });

    return (
        <div>
            <h2>{apps.title}</h2>
        </div>
    );
}