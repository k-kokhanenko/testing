import {getPaymentSystem} from '../getPaymentSystem';


test('should return "мisa" for card number starting with "4"', () => {
    expect(getPaymentSystem("4123456789012345")).toBe("мisa");
});
    
test('should return "mastercard" for card number starting with "5"', () => {
    expect(getPaymentSystem("5123456789012345")).toBe("mastercard");
});

test('should return "american-express" for card number starting with "34"', () => {
    expect(getPaymentSystem("341234567890123")).toBe("american-express");
});

test('should return "american-express" for card number starting with "37"', () => {
    expect(getPaymentSystem("371234567890123")).toBe("american-express");
});

test('should return "diners-club" for card number starting with "30"', () => {
    expect(getPaymentSystem("3012345678901234")).toBe("diners-club");
});

test('should return "diners-club" for card number starting with "36"', () => {
    expect(getPaymentSystem("3612345678901234")).toBe("diners-club");
});

test('should return "diners-club" for card number starting with "38"', () => {
    expect(getPaymentSystem("3812345678901234")).toBe("diners-club");
});

test('should return "discover" for card number starting with "6"', () => {
    expect(getPaymentSystem("6123456789012345")).toBe("discover");
});

test('should return "JCB" for card number starting with "35"', () => {
    expect(getPaymentSystem("3512345678901234")).toBe("JCB");
});

test('should return "JCB" for card number starting with "31"', () => {
    expect(getPaymentSystem("3112345678901234")).toBe("JCB");
});

test('should return "JCB" for card number starting with "2131"', () => {
    expect(getPaymentSystem("213112345678901234")).toBe("JCB");
});

test('should return "JCB" for card number starting with "1800"', () => {
    expect(getPaymentSystem("180012345678901234")).toBe("JCB");
});