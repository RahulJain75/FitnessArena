import axios from 'axios';
import React, { useEffect, useState } from 'react';

function Dashboard() {
    const [userData, setUserData] = useState([]);
    const adminT=localStorage.getItem("admin");
    const getData = async () => {
        try {
            const response = await axios.get('http://localhost:3005/users');
            console.log('Response Data:', response.data); // Log response data
            setUserData(response.data);
        } catch (error) {
            console.error('Error fetching data:', error);
        }
    };

    useEffect(() => {
        getData();
    }, []);

    return (
<>{adminT && (<div className="dashboard">
            {userData.length > 0 ? (
                userData.map((obj) => (
                    <div key={obj.id} className="user-card">
                        <h2>User Id: {obj.id}</h2>
                        <p>First Name: {obj.firstName}</p>
                        <p>Last Name: {obj.lastName}</p>
                        <p>User Name: {obj.userName}</p>
                        <p>Email: {obj.email}</p>
                        <p>Phone: {obj.phone}</p>
                    </div>
                ))
            ) : (
                <p>No user data available</p>
            )}
        </div>) 
        }
        {
            !adminT && (
                <p>Admin not logged in</p>
            )
        }
</>
        
    );
}

export default Dashboard;


