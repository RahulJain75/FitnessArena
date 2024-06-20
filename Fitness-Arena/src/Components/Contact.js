import axios from 'axios';
import React, { useState } from 'react';
import { useNavigate } from "react-router-dom";

export default function Contact() {
    const navigate = useNavigate();
    const [Name, setName] = useState('');
    const [phone, setPhone] = useState('');
    const [email, setEmail] = useState('');
    const [message, setMessage] = useState('');

    const handleChangeName = (e) => {
        setName(e.target.value)
    }
    const handleChangePhone = (e) => {
        setPhone(e.target.value)
    }
    const handleChangeEmail = (e) => {
        setEmail(e.target.value)
    }
    const handleChangeMessage = (e) => {
        setMessage(e.target.value)
    }


    const handleClick = async (e) => {
        e.preventDefault();
        const data = {
            Name: Name,
            phone: phone,
            email: email,
            message: message
        };
        try {
            await axios.post('http://localhost:3005/contact', data, {
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
        <div className="contact-container">
            <h1>JOIN FITNESS ARENA!</h1>
            <h2>Premium Fitness Club</h2>
            <p>Take your workout to the next level.</p>
            <form className="contact-form">
                <div className="form-group">
                <label htmlFor="phone">Name*</label>
                    <input onChange={handleChangeName} type="textarea" id="name" name="name" required />
                </div>
                <div className="form-group">
                    <label htmlFor="phone">Phone*</label>
                    <input onChange={handleChangePhone} type="tel" id="phone" name="phone" required />
                </div>
                <div className="form-group">
                    <label htmlFor="email">Email*</label>
                    <input onChange={handleChangeEmail} type="email" id="email" name="email" required />
                </div>
                <div className="form-group">
                    <label htmlFor="message">Message</label>
                    <textarea onChange={handleChangeMessage} id="message" name="message" rows="5"></textarea>
                </div>
                <div className="form-group recaptcha">
                    This site is protected by reCAPTCHA and the Google Privacy Policy and Terms of Service apply.
                </div>
                <button onClick={handleClick} type="submit" className="submit-button">SUBMIT APPLICATION</button>
            </form>
        </div>
    );
}

