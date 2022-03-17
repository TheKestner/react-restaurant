import React, { useState, useEffect} from 'react';
import { getData } from '../utils/data';

export default function Lunch() {
    useEffect(() => {
        let data = getData();
    });

    return (
        <div>
            <h1>HELLO2</h1>
        </div>
    );
}