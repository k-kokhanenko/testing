import {validateCardNumber} from '../validateCardNumber';

test('Valid card number should return true', () => {
    const cardNumber = "4012888888881881";
    expect(validateCardNumber(cardNumber)).toBe(true);
});
    
test('Invalid card number (less than 16 digits) should return false', () => {
    const cardNumber = "12345678901234";
    expect(validateCardNumber(cardNumber)).toBe(false);
});

test('Invalid card number (more than 16 digits) should return false', () => {
    const cardNumber = "12345678901234567890";
expect(validateCardNumber(cardNumber)).toBe(false);
    });

test('Invalid card number (contains non-digit characters) should return false', () => {
    const cardNumber = "1234 5678 9012 345A";
    expect(validateCardNumber(cardNumber)).toBe(false);
});

test('Invalid card number (incorrect checksum) should return false', () => {
    const cardNumber = "1234567890123457";
    expect(validateCardNumber(cardNumber)).toBe(false);
});