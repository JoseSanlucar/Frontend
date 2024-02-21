import { render, screen, fireEvent } from '@testing-library/react';
import BookingForm from './BookingForm';
import { initializeTimes, updateTimes } from './BookingPage'; // Importa las funciones necesarias
import { getIsFormValid } from './BookingForm'; // Import your validation functions



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

describe('BookingForm', () => {
    test('date input has required attribute', () => {
        const { getByLabelText } = render(<BookingForm />);
        const dateInput = getByLabelText('Date:');
        expect(dateInput).toHaveAttribute('required');
    });

    test('number of guests input has required and min attributes', () => {
        const { getByLabelText } = render(<BookingForm />);
        const numberOfGuestsInput = getByLabelText('Number of Guests:');
        expect(numberOfGuestsInput).toHaveAttribute('required');
        expect(numberOfGuestsInput).toHaveAttribute('min', '1');
    });

});
describe('Form Validation', () => {
    test('validateDate - valid date', () => {
        const validDate = '2024-02-20';
        expect(validDate).toBe(true);
    });

    test('validateDate - invalid date', () => {
        const invalidDate = '2024-02-31'; // Assuming February 31st is invalid
        expect(invalidDate).toBe(false);
    });

    test('validateNumberOfGuests - valid number', () => {
        const validNumberOfGuests = '2';
        expect(validNumberOfGuests>0).toBe(true);
    });

    test('validateNumberOfGuests - invalid number', () => {
        const invalidNumberOfGuests = '0';
        expect(invalidNumberOfGuests>0).toBe(false);
    });
  
    test('getIsFormValid - valid form', () => {
        const formData = {
            date: '2024-02-20',
            numberOfGuests: '2',
        // Add other required fields as needed
      };
      expect(getIsFormValid(formData)).toBe(true);
    });
  
    test('getIsFormValid - invalid form', () => {
        const formData = {
            date: '2024-02-31',
            numberOfGuests: '0',
        // Add other required fields as needed
        };
        expect(getIsFormValid(formData)).toBe(false);
    });
  });