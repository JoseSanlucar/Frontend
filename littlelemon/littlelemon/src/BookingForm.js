import React, { useState } from 'react';
import './BookingForm.css';


function BookingForm({ availableTimes, setAvailableTimes,onDateChange,onSubmit }) {
    const [date,setDate]=useState("");
    const [time,setTime]=useState(setAvailableTimes);
    const [numberOfGuests,setNumberOfGuests]=useState("");
    const [occasion,setOccasion]=useState("");

    const getIsFormValid = () => {
        return (date && time && numberOfGuests>1 && occasion);
    };

    const clearForm = () => {
        setDate("");
        setTime("");
        setNumberOfGuests("");
        setOccasion("");
    };

    const handleSubmit = (e) => {
    e.preventDefault();
    const formData = {
        date,
        time,
        numberOfGuests,
        occasion
    };
    onSubmit(formData);
    //clearForm();
    // Handle form submission, e.g., send data to backend
    };

    const handleDateChange = (e) => {
        const newDate = e.target.value;
        setDate(newDate);
        onDateChange(newDate); // Llama a la función de devolución de llamada con el nuevo valor de date
    };

    return (
        <form onSubmit={handleSubmit}>
            <fieldset>
                <>
                    <label htmlFor="date">Date:</label>
                    <input type="date" id="date" name="date" value={date} onChange={handleDateChange} required />
                </>
                <>
                    <label htmlFor="time">Time:</label>
                    <select name="time" id="time" value={time} onChange={(e) => { setTime(e.target.value); }} >
                        <option value="">Select Time</option>
                        {availableTimes.map((time, index) => (
                            <option key={index} value={time}>{time}</option>
                        ))}
                    </select>
                </>
                <>
                    <label htmlFor="number">Number of Guests:</label>
                    <input type="number" id="numberOfGuests" name="numberOfGuests" value={numberOfGuests} onChange={(e) => { setNumberOfGuests(e.target.value); }} min="1"/>
                </>
                <>
                    <label htmlFor="occasion">Occasion:</label>
                    <select name="occasion" id="occasion" value={occasion} onChange={(e) => { setOccasion(e.target.value); }} required >
                        <option value="">Select Occasion</option>
                        <option value="Birthday">Birthday</option>
                        <option value="Anniversary">Anniversary</option>
                    </select>
                </>
                <>
                    <button type="submit" aria-label="Make your Reservation" disabled={!getIsFormValid()}>Make your Reservation</button>
                </>
            </fieldset>
        </form>
    );
}
export default BookingForm;

