import axios from 'axios';
import React, { useState } from 'react';
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";

export default function Signup() {
    const navigate = useNavigate();
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [userName, setUserName] = useState('');
    const [email, setEmail] = useState('');
    const [phone, setPhone] = useState('');
    const [password, setPassword] = useState('');

    const handleChangeFirstName = (e) => {
        setFirstName(e.target.value)
    }
    const handleChangeLastName = (e) => {
        setLastName(e.target.value)
    }
    const handleChangeUserName = (e) => {
        setUserName(e.target.value)
    }
    const handleChangeEmail = (e) => {
        setEmail(e.target.value)
    }
    const handleChangePhone = (e) => {
        setPhone(e.target.value)
    }
    const handleChangePassword = (e) => {
        setPassword(e.target.value)
    }
    const handleTrainerClick = (e) => {
        navigate("/tsignup");
    }


    const handleClick = async (e) => {
        e.preventDefault();
        const data = {
            firstName: firstName,
            lastName: lastName,
            userName: userName,
            email: email,
            phone: phone,
            password: password
        };
        try {
            await axios.post('http://localhost:3005/signup', data, {
                headers: {
                    'Content-Type': 'application/json'
                }
            });
            navigate("/signuped");

        } catch (error) {
            console.error('Error:', error);
        }
        // try {
        //   await fetch('http://localhost:3005/signup', {
        //     method: 'POST',
        //     headers: {
        //         'Content-Type': 'application/json'
        //     },
        //     body: JSON.stringify(data)
        //   });
        // } catch (error) {
        //    console.error('Error:', error);
        // }
    }
    return (
        <div>
            <div>
                <div className='signup' id='signup'>
                    <form action="action_page.php" style={{ border: '1px solid #ccc' }}>
                        <div className="container">
                            <h1>User Sign Up</h1>
                            <p>Please fill in this form to create an account.</p>
                            <hr />
                            <label><b>First Name</b></label>
                            <input onChange={handleChangeFirstName} type="text" placeholder="Enter First Name" value={firstName} required />

                            <label><b>Last Name</b></label>
                            <input onChange={handleChangeLastName} type="text" placeholder="Enter Last Name" value={lastName} required />

                            <label><b>User Name</b></label>
                            <input onChange={handleChangeUserName} type="text" placeholder="Enter User Name" value={userName} required />

                            <label htmlFor="email"><b>Email</b></label>
                            <input onChange={handleChangeEmail} type="text" placeholder="Enter Email" value={email} required />

                            <label><b>Phone</b></label>
                            <input onChange={handleChangePhone} type="tel" placeholder="Enter Phone Number" value={phone} required /><br />

                            <label htmlFor="psw"><b>Password</b></label>
                            <input onChange={handleChangePassword} type="password" placeholder="Enter Password" value={password} required />

                            <p>By creating an account you agree to our <a href="#" style={{ color: 'dodgerblue' }}>Terms & Privacy</a>.</p>

                            <div className="clearfix">
                                <button onClick={handleClick}>Sign Up</button>
                                <div className='signupbuttons'>
                                    <Link to='/Cancel'><button type="button" className="cancelbtn">Cancel</button></Link>
                                    <button onClick={handleTrainerClick}>Trainer Sign Up</button>
                                </div>
                            </div>
                        </div>
                    </form>
                </div>
            </div>
        </div>

    );
}

