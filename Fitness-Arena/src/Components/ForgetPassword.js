import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from "react-router-dom";

export default function ForgetPassword() {
    const navigate = useNavigate();
    const [email, setEmail] = useState('');
    const [otpSent, setOtpSent] = useState(false);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);

    const handleChangeEmail = (e) => {
        setEmail(e.target.value);
    };

    const handleSendOtp = async () => {
        if (!email) {
            setError('Email is required');
            return;
        }
        setLoading(true);
        setError(null);
        try {
            // Replace with your API endpoint
            await axios.post('http://localhost:3005/forget', { email });
            setOtpSent(true);
            navigate("/Sendotp");
        } catch (err) {
            setError('Failed to send OTP');
        } finally {
            setLoading(false);
        }
    };
    return (
        <div className="email-otp-container">
            <h2>Enter your email to receive OTP</h2>
            <input
                type="email"
                value={email}
                onChange={handleChangeEmail}
                placeholder="Enter your email"
                className="email-input"
                required
            />
            <button onClick={handleSendOtp} disabled={loading} className="send-otp-button">
                {loading ? 'Sending...' : 'Send OTP'}
            </button>
            {otpSent && <p>OTP has been sent to your email!</p>}
            {error && <p className="error-message">{error}</p>}
        </div>
    )
}
