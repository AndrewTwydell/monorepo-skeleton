import React, { useEffect, useState } from 'react';
import axios from 'axios';
import './App.css';

function App() {
    const [data, setData] = useState('Loading...');

    useEffect(() => {
        axios.get(`/api`).then(
            ({ data }: any) => setData(data.message),
            (error: any) => console.log(error)
        );
    }, []);

    return (
        <div className="App">
            <h1>{data}</h1>
        </div>
    );
}

export default App;
