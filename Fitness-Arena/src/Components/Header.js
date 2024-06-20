// Header.js
import React, { useState } from "react";
import { Link } from "react-router-dom";
import { useAuth } from './AuthContext';

function Header() {
    const [isOpen, setIsOpen] = useState(false);
    const { isAuthenticated, setIsAuthenticated } = useAuth();

    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };

    const handleLogout = () => {
        localStorage.removeItem("admin");
        localStorage.removeItem("trainer");
        localStorage.removeItem("user");
        setIsAuthenticated(false);
    };

    return (
        <>
            <header className="header">
                <div className="logo">
                    <img src="../../Images/gymlogo1.jpg" alt="Gym Logo" />
                </div>
                {isAuthenticated? (<div>
                    <h2>Welcome,{localStorage.getItem("user") || localStorage.getItem("admin") || localStorage.getItem("trainer")}</h2>
                </div>): (
                    <></>
                )}
                
                <div className="title">
                    <h1>Fitness Arena</h1>
                </div>
                <div className="hamburger" onClick={toggleMenu}>
                    <div className="line"></div>
                    <div className="line"></div>
                    <div className="line"></div>
                </div>
                <nav className={`nav ${isOpen ? "open" : ""}`}>
                    <ul>
                        <li><Link to="Plan">Plan</Link></li>
                        <li><Link to="/Dashboard">Dashboard</Link></li>
                        <li><Link to="Contact">Contact</Link></li>
                    </ul>
                    <div className="auth-buttons">
                        {isAuthenticated ? (
                            <button onClick={handleLogout}>Logout</button>
                        ) : (
                            <>
                                <Link to="/login"><button>Login</button></Link>
                                <Link to="/signup"><button>Sign up</button></Link>
                            </>
                        )}
                    </div>
                </nav>
            </header>
        </>
    );
}

export default Header;

