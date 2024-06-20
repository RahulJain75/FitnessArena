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


export default function Trainerlogin() {
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
                const res = await axios.post('http://localhost:3005/trainerLogin', data, {
                    headers: { 'Content-Type': 'application/json' }
                });
                if (res?.data != "Trainer not exist") {
                    setIsAuthenticated(true);
                    localStorage.setItem("trainer", res?.data[1]);
                    navigate("/");
                }

            } catch (error) {
                console.error('Error:', error);
                alert("Wrong Credentials");
            }
        }


    };
    const myStyle = {
        backgroundImage: "url(../Images/5.png)",
        height: "auto",
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat"
    };

    return (
        <div className='login'>
            <h2>Trainer Login</h2>
            <form>
                <div className="container" style={myStyle}>
                    <label htmlFor="email"><b>Email</b></label>
                    <input onChange={handleChangeEmail} value={email} type="text" placeholder="Enter Email" required />

                    <label htmlFor="password"><b>Password</b></label>
                    <input onChange={handleChangePassword} value={password} type="password" placeholder="Enter Password" required />

                    <button onClick={handleClick}>Login</button>
                    <div className='otherlinks'>
                        <Link to='/'><button type="button" className="cancelbtn">Cancel</button></Link>
                        <span className="psw"><Link to='/trainerforgotpassword'>Forgot password?</Link></span></div>
                </div>
            </form>
        </div>
    );
}