import React from "react";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";

function Poster() {
    const navigate = useNavigate();
    const handleClick =(e) =>{
        navigate("/Intro");
    }
    return (<div className="poster" id="Poster">
        <Link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css"></Link>
        <img src="../../Images/poster1.png"></img>
        <div className="postertext">
            <h1>BE <mark>FLAME</mark></h1>
            <h2> WORK INSANE</h2>
        </div>
        <div className="button">
            <button onClick={handleClick}>Gym Tour <i class="fa fa-play-circle"></i></button>
        </div>
    </div>)

}
export default Poster;