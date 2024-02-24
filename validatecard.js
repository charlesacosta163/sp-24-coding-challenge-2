function validateCreditCard(cardNumber) {
    let cardString = cardNumber.toString();

    // Check the length and starting digits to determine card type
    if (cardString.length === 15 && (cardString.startsWith('34') || cardString.startsWith('37'))) {
        return "American Express";
    } else if (cardString.length === 16 && (cardString.startsWith('51') || cardString.startsWith('52') || cardString.startsWith('53') || cardString.startsWith('54') || cardString.startsWith('55'))) {
        return "MasterCard";
    } else if ((cardString.length === 13 || cardString.length === 16) && cardString.startsWith('4')) {
        return "Visa";
    } else {
        return "Invalid";
    }
}

function isValidChecksum(cardNumber) {
    let cardString = cardNumber.toString();
    let sum = 0;
    for (let i = cardString.length - 1; i >= 0; i--) {
        let digit = parseInt(cardString[i]);
        if ((cardString.length - i) % 2 === 0) {
            digit *= 2;
            if (digit > 9) {
                digit -= 9;
            }
        }
        sum += digit;
    }
    return sum % 10 === 0;
}

    
const cardNumber = 4851752011266671;

    if (isValidChecksum(cardNumber)) {
        console.log("Valid " + validateCreditCard(cardNumber) + " card number.");
    } else {
        console.log("Invalid card number.");
    }

// Output: Valid Visa card number