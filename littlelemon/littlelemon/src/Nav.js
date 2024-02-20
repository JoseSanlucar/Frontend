// Nav.js
import React from 'react';
import './App.css';
import { Link } from "react-router-dom";
import logo from "./img/Logo .svg";

function Nav() {
    return (
        <nav className='nav-principal'>
            <img src={logo} alt="little lemon logo" className='logo'></img>
            <ul className='links'>
                <li><Link to="/" >Home</Link></li>
                <li><Link to="/about" >About</Link></li>
                <li><Link to="/menu" >Menu</Link></li>
                <li><Link to="/BookingPage" >Reservations</Link></li>
                <li><Link to="/highlights" >Highlights</Link></li>
            </ul>
            <span></span>
        </nav>
    );
}

export default Nav;


