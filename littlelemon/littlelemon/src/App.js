import './App.css';
import React from 'react';
import Hero from './Hero';
import Nav from './Nav';
import Highlights from './Highlights';
import Testimonials from './Testimonials';
import About from './About';
import Footer from './Footer';
import {Routes, Route} from "react-router-dom";


function App() {
    return (
    <div className='grid-container'>
        <Nav/>
        <Routes>
            <Route path="/" element={<Hero/>}></Route>
            <Route path="/highlights" element={<Highlights/>}></Route>
            <Route path="/about" element={<About/>}></Route>
            <Route path="/hero" element={<Hero/>}></Route>
        </Routes>
        <Testimonials/>
        <Footer/>
    </div>
);
}

export default App;
