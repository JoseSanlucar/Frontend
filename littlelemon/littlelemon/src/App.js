import './App.css';
import React from 'react';
import Hero from './Hero';
import Nav from './Nav';
import Highlights from './Highlights';
import Testimonials from './Testimonials';
import About from './About';
import Footer from './Footer';
;


function App() {
    return (
    <div className='grid-container'>
        <Nav/>
        <Hero/>
        <Highlights/>
        <Testimonials/>
        <About/>
        <Footer/>
    </div>
);
}

export default App;
