import React, { useState } from 'react';
import './BookingForm.css';


function BookingForm({ availableTimes, setAvailableTimes,onDateChange,onSubmit }) {
    const [date,setDate]=useState("");
    const [time,setTime]=useState(setAvailableTimes);
    const [numberOfGuests,setNumberOfGuests]=useState("");
    const [occasion,setOccasion]=useState("");

    const getIsFormValid = () => {
        return (date && time && numberOfGuests>0 && occasion);
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
                    <label>Date:</label>
                    <input type="date" name="date" value={date} onChange={handleDateChange} />
                </>
                <>
                    <label>Time:</label>
                    <select name="time" value={time} onChange={(e) => { setTime(e.target.value); }}>
                        <option value="">Select Time</option>
                        {availableTimes.map((time, index) => (
                            <option key={index} value={time}>{time}</option>
                        ))}
                    </select>
                </>
                <>
                    <label>Number of Guests:</label>
                    <input type="number" name="numberOfGuests" value={numberOfGuests} onChange={(e) => { setNumberOfGuests(e.target.value); }} />
                </>
                <>
                    <label>Occasion:</label>
                    <select name="occasion" value={occasion} onChange={(e) => { setOccasion(e.target.value); }} >
                        <option value="">Select Occasion</option>
                        <option value="Birthday">Birthday</option>
                        <option value="Anniversary">Anniversary</option>
                    </select>
                </>
                <>
                    <button type="submit" disabled={!getIsFormValid()}>Make your Reservation</button>
                </>
            </fieldset>
        </form>
    );
}
export default BookingForm;
