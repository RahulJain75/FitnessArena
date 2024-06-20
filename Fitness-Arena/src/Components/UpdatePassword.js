import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from "react-router-dom";

export default function UpdatePassword() {
    const navigate = useNavigate();
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [otpToken, setOtpToken] = useState('');
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);

    const handleChangeEmail = (e) => setEmail(e.target.value);
    const handleChangePassword = (e) => setPassword(e.target.value);
    const handleChangeOtpToken = (e) => setOtpToken(e.target.value);

    const handleSubmit = async (e) => {
        e.preventDefault();
        setLoading(true);
        setError(null);
        try {
            // Replace with your API endpoint
            await axios.post('http://localhost:3005/updatePassword', { email, password, otpToken });
            alert('OTP verified successfully');
            navigate("/Updated");
        } catch (err) {
            setError('Failed to verify OTP');
        } finally {
            setLoading(false);
        }
    };

    return (
        <div className="form-container">
            <h2>Enter your details</h2>
            <form onSubmit={handleSubmit}>
                <input
                    type="email"
                    value={email}
                    onChange={handleChangeEmail}
                    placeholder="Enter your email"
                    className="form-input"
                    required
                />
                <input
                    type="password"
                    value={password}
                    onChange={handleChangePassword}
                    placeholder="Enter your password"
                    className="form-input"
                    required
                />
                <input
                    type="text"
                    value={otpToken}
                    onChange={handleChangeOtpToken}
                    placeholder="Enter your OTP token"
                    className="form-input"
                    required
                />
                <button type="submit" disabled={loading} className="submit-button">
                    {loading ? 'Submitting...' : 'Submit'}
                </button>
                {error && <p className="error-message">{error}</p>}
            </form>
        </div>
    )
}
