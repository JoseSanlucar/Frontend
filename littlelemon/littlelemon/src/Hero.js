import React from 'react';
import './Hero.css';

function Hero() {
    return (
        <section className='contenedor'>
            <span></span>
            <div className='hero'>
            <h1>Little Lemon</h1>
            <h2>Chicago</h2>
            <p>We are a family owned Mediterranean restaurant,focused on tradicional recipes served with a modern twist</p>
            <button>Reserve a Table</button>
            </div>
            <span></span>
            <img src="./img/restauranfood.jpg" alt="imagen chef" className='imagen-saliente'></img>
            <span></span>
        </section>
    );
}

export default Hero;