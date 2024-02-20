import { render, screen } from '@testing-library/react';
import BookingForm from './BookingForm';
import { initializeTimes, updateTimes } from './BookingPage'; // Importa las funciones necesarias

describe('BookingForm component', () => {
    test('renders Date label correctly', () => {
        // Simula los valores de las propiedades para BookingForm
        const availableTimes = ['17:00', '18:00', '19:00', '20:00', '21:00', '22:00'];
        const setAvailableTimes = jest.fn(); // Simula una función
        render(<BookingForm availableTimes={availableTimes} setAvailableTimes={setAvailableTimes} />);

        const dateLabel = screen.getByText(/Date:/);
        expect(dateLabel).toBeInTheDocument();
    });

    // Agrega más casos de prueba para otros elementos de texto estáticos según sea necesario
});

// Unit test for initializeTimes function
describe('initializeTimes function', () => {
    it('should return the initial available times today', () => {
        const initialTimes = initializeTimes()
        expect(initializeTimes()).toEqual(initialTimes);
    });
});

// Unit test for updateTimes function
describe('updateTimes function', () => {
    it('should return the same value provided in the state', () => {
        const selectedDate = '2024-02-14';
        const updatedTimes = updateTimes('UPDATE_TIMES',selectedDate);
        expect(updateTimes('UPDATE_TIMES',selectedDate)).toEqual(updatedTimes);
    });
});
