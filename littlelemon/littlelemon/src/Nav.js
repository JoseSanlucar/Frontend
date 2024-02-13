// Nav.js
import React from 'react';
import './App.css';

function Nav() {
    return (
        <nav className='nav-principal'>
            <img src="icons_assets/Logo.SVG" alt="little lemon logo" className='logo'></img>
            <ul className='links'>
                <li><a href="#home">Home</a></li>
                <li><a href="#about">About</a></li>
                <li><a href="#menu">Menu</a></li>
                <li><a href="#reservations">Reservations</a></li>
                <li><a href="#order">Order Online</a></li>
                <li><a href="#login">Login</a></li>
            </ul>
            <span></span>
        </nav>
    );
}

export default Nav;


