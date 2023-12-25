export function validateCardNumber(cardNumber) {
    // Удаляем все пробелы из номера карточки
    cardNumber = cardNumber.replace(/\s/g, '');
    
    // Проверяем, что номер состоит из 16 цифр
    if (!/^\d{16}$/.test(cardNumber)) {
        return false;
    }
    
    // Вычисляем контрольную сумму по алгоритму Луна
    let sum = 0;
    for (let i = 0; i < 16; i++) {
        let digit = parseInt(cardNumber[i]);
    
        if (i % 2 === 0) {
         digit *= 2;
         if (digit > 9) {
            digit -= 9;
         }
        }
    
        sum += digit;
    }
    
    // Проверяем, что контрольная сумма кратна 10
    return sum % 10 === 0;
}  
