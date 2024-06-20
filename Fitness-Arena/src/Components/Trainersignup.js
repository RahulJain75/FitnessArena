import axios from 'axios';
import React, { useState } from 'react';
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";

export default function Trainersignup() {
    const navigate = useNavigate();
    const [Name, setName] = useState('');
    const [userName, setUserName] = useState('');
    const [dob, setDOB] = useState('');
    const [age, setAge] = useState('');
    const [email, setEmail] = useState('');
    const [phone, setPhone] = useState('');
    const [password, setPassword] = useState('');

    const handleChangeName = (e) => {
        setName(e.target.value)
    }
    const handleChangeUserName = (e) => {
        setUserName(e.target.value)
    }
    const handleChangeDOB = (e) => {
        setDOB(e.target.value)
    }
    const handleChangeAge = (e) => {
        setAge(e.target.value)
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


    const handleClick = async (e) => {
        e.preventDefault();
        const data = {
            Name: Name,
            userName: userName,
            dateOfBirth: dob,
            age: age,
            email: email,
            phone: phone,
            password: password
        };
        try {
            await axios.post('http://localhost:3005/trainerSignup', data, {
                headers: {
                    'Content-Type': 'application/json'
                }
            });
            navigate("/");

        } catch (error) {
            console.error('Error:', error);
        }
    }
    return (
        <div>
            <div>
                <div className='signup' id='signup'>
                    <form action="action_page.php" style={{ border: '1px solid #ccc' }}>
                        <div className="container">
                            <h1>Trainer Sign Up</h1>
                            <p>Please fill in this form to create an account.</p>
                            <hr />
                            <label><b>Name</b></label>
                            <input onChange={handleChangeName} type="text" placeholder="Enter Name" value={Name} required />

                            <label><b>User Name</b></label>
                            <input onChange={handleChangeUserName} type="text" placeholder="Enter User Name" value={userName} required />

                            <div className='dob'>
                                <div>
                                    <label><b>DOB</b></label><br></br>
                                    <input onChange={handleChangeDOB} type="datetime-local" placeholder="Enter DOB" value={dob} required />
                                </div>

                                <div>
                                    <label><b>Age</b></label><br></br>
                                    <input onChange={handleChangeAge} type="number" placeholder="Enter Age" value={age} required />
                                </div>
                            </div>

                            <label htmlFor="email"><b>Email</b></label>
                            <input onChange={handleChangeEmail} type="text" placeholder="Enter Email" value={email} required />

                            <label><b>Phone</b></label>
                            <input onChange={handleChangePhone} type="tel" placeholder="Enter Phone Number" value={phone} required /><br />

                            <label htmlFor="psw"><b>Password</b></label>
                            <input onChange={handleChangePassword} type="password" placeholder="Enter Password" value={password} required />

                            <p>By creating an account you agree to our <Link to="#" style={{ color: 'dodgerblue' }}>Terms & Privacy</Link>.</p>

                            <div className="clearfix">
                                <button onClick={handleClick}>Sign Up</button>
                                <div className='signupbuttons'>
                                    <Link to ='/Cancel'><button type="button" className="cancelbtn">Cancel</button></Link>
                                </div>
                            </div>
                        </div>
                    </form>
                </div>
            </div>
        </div>

    );
}
