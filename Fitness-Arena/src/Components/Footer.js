import React from "react";
import { Link } from "react-router-dom";

function Footer() {
    return (<div className="footer">
        <img src="../../Images/gymlogo1.jpg"></img>
        <div className="footer1">
            <Link to="/">Home</Link>
            <Link to="Intro">About</Link>
            <Link to="#Plan">Plan</Link>
        </div>
    </div>)
}
export default Footer;