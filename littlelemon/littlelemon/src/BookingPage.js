import React, { useReducer,useState } from 'react';
import BookingForm from './BookingForm';
import ConfirmedBooking from './ConfirmedBooking';
import {fetchAPI,submitAPI} from './Api'
import './BookingForm.css';
import { useNavigate } from "react-router-dom";

function submitForm (formData,navigate){
    submitAPI(formData).then(success => {
        if (success) {
            navigate("/ConfirmedBooking");
        } else {
            console.error("Submission failed");
            alert("Submission failed");
            // Handle submission failure if needed
        }
    }).catch(error => {
        console.error("Error occurred during submission:", error);
        // Handle error if needed
    });
}

function initializeTimes() {
    const today = new Date();
    const year = today.getFullYear();
    const month = today.getMonth() + 1; // Months are zero-based
    const day = today.getDate();
    const formattedDate = `${year}-${month}-${day}`;
    const availableTimes = fetchAPI(formattedDate);
    return availableTimes;
}


// Definir la función reductora
function updateTimes(state, action) {
    // Verificar el tipo de acción (en este caso, solo hay una acción, que es la fecha)
    switch (action.type) {
        // En caso de que la acción sea de tipo 'UPDATE_TIMES', actualiza los tiempos disponibles utilizando la fecha proporcionada en la acción
        case 'UPDATE_TIMES':
            console.log(action.payload);
            return fetchAPI(action.payload); // Utiliza el valor de la acción como la nueva fecha para obtener los tiempos disponibles
        default:
            return state; // Si la acción no coincide con ninguna de las definidas, simplemente devuelve el estado actual sin cambios
    }
}


function BookingPage() {
    const navigate = useNavigate();
    const [date, setDate] = useState();
    const [availableTimes, dispatch] = useReducer(updateTimes,initializeTimes());

    const handleDateChange = (newDate) => {
        setDate(newDate); // Actualiza la fecha en el estado
        dispatch({ type: 'UPDATE_TIMES', payload: newDate });// Actualiza los tiempos disponibles utilizando el nuevo valor de fecha
    };

    const handleFormSubmit = (formData) => {
        submitForm(formData, navigate);
    };

    return (
        <>
            <BookingForm availableTimes={availableTimes} updateTimes={dispatch} onDateChange={handleDateChange} onSubmit={handleFormSubmit}/>
        </>
    );
}

export default BookingPage;
export { updateTimes,initializeTimes };


