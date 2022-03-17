import React, { useState, useEffect} from 'react';
import { getData } from '../utils/data';

export default function Dinner() {
    useEffect(() => {
        let data = getData();
    });

    return (
        <div>
            <h1>HELLO3</h1>
        </div>
    );
}