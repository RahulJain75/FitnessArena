// Login.js
import React, { useState } from 'react';
import axios from 'axios';
import { useAuth } from './AuthContext';
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";

const customStyles = {
    content: {
        top: '50%',
        left: '50%',
        right: 'auto',
        bottom: 'auto',
        marginRight: '-50%',
        transform: 'translate(-50%, -50%)',
    },
};


export default function Adminlogin() {
    const navigate = useNavigate();
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const { setIsAuthenticated } = useAuth();

    const handleChangeEmail = (e) => setEmail(e.target.value);
    const handleChangePassword = (e) => setPassword(e.target.value);

    const handleClick = async (e) => {
        e.preventDefault();
        const data = { email, password };
        if (!email || !password) {
            alert("Fill The Credentials")
        }
        else {
            try {
                const res = await axios.post('http://localhost:3005/adminlogin', data, {
                    headers: { 'Content-Type': 'application/json' }
                });
                if (res?.data != "User not exist") {
                    setIsAuthenticated(true);
                    localStorage.setItem("admin", res?.data[1]);
                    alert("Successfully Logged In")
                    navigate("/");
                    // window.location.href="/";
                }

            } catch (error) {
                console.error('Error:', error);
            }
        }


    };
    const myStyle = {
        backgroundImage: "url(../Images/2.jpeg)",
        height: "auto",
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat"
    };

    return (
        <div className='adminlogin'>
            <form>
                <h2>Admin Login</h2>
                <div className="container" style={myStyle}>
                    <label htmlFor="email"><b>Email</b></label>
                    <input onChange={handleChangeEmail} value={email} type="text" placeholder="Enter Email" required />

                    <label htmlFor="password"><b>Password</b></label>
                    <input onChange={handleChangePassword} value={password} type="password" placeholder="Enter Password" required />

                    <button onClick={handleClick}>Login</button>
                    <Link to='/Cancel'><button type="button" className="cancelbtn">Cancel</button></Link>

                </div>
            </form>
        </div>
    );
}