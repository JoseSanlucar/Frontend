import './App.css';
import React from 'react';
import Hero from './Hero';
import Nav from './Nav';
import BookingPage from './BookingPage';
import Testimonials from './Testimonials';
import ConfirmedBooking from './ConfirmedBooking';
import About from './About';
import Footer from './Footer';
import {Routes, Route} from "react-router-dom";


function App() {
    return (
    <div className='grid-container'>
        <Nav/>
        <Routes>
            <Route path="/" element={<Hero/>}></Route>
            <Route path="/BookingPage" element={<BookingPage/>}></Route>
            <Route path="/about" element={<About/>}></Route>
            <Route path="/hero" element={<Hero/>}></Route>
            <Route path="/ConfirmedBooking" element={<ConfirmedBooking />} />
        </Routes>
        <Testimonials/>
        <Footer/>
    </div>
);
}

export default App;
