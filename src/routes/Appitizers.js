import React, { useState, useEffect} from 'react';
import { getData } from '../utils/data';

export default function Appitizers() {
    useEffect(() => {
        let data = getData();
    });

    return (
        <div>
            <h1>HELLO</h1>
        </div>
    );
}