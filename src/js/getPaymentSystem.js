export function getPaymentSystem(cardNumber) {
    if (cardNumber.startsWith("4")) {
        return "visa";
    } else if (cardNumber.startsWith("5")) {
        return "mastercard";
    } else if (cardNumber.startsWith("34") || cardNumber.startsWith("37")) {
        return "american-express";
    } else if (cardNumber.startsWith("30") || cardNumber.startsWith("36") || cardNumber.startsWith("38")) {
        return "diners-club";
    } else if (cardNumber.startsWith("6")) {
        return "discover";
    } else if (cardNumber.startsWith("35") || cardNumber.startsWith("31")) {
        return "JCB";
    } else if (cardNumber.startsWith("2131") || cardNumber.startsWith("1800")) {
        return "JCB";
    }
}