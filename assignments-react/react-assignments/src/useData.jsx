

import React, { useState, useEffect } from 'react';

function UseData() {
    const [data, setData] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);   
    
    useEffect(() => {
        setLoading(true);
        fetch('https://jsonplaceholder.typicode.com/users/1')
            .then(response => response.json())
            .then(userData => {
                setData(userData);
                setLoading(false);
            })
            .catch(err => {
                setError(err.message);
                setLoading(false);
            });
    }, []);

    if (loading) {
        return <div>Loading...</div>;
    }

    if (error) {
        return <div>Error: {error}</div>;
    }

    return (
        <div>
            <h2>User Information</h2>
            <div>Name: {data?.name}</div>
            <div>Email: {data?.email}</div>
            <div>Phone: {data?.phone}</div>    
          {/* "?" is Optional chaining it is to avoid errors if data is null . it checks if data exists before accessing the property */}
        </div>
    );
}

export default UseData;