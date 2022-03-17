import React, { useState, useEffect} from 'react';
import { getData } from '../utils/data';

export default function Lunch() {
    useEffect(() => {
        let data = getData();
    });

    return (
        <div>
           <h2>Hello2</h2>
        </div>
    );
}