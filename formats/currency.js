const number = require("./number")

function currency ({ amount, currency, seperatingDigits, seperator, addDecimal = true }) {
    // Throw an error if num is a string AND contains non-numeric characters
    if (typeof amount === 'string' && !amount.match(/^\d+$/)) {
        throw new Error('Invalid number')
    }

    // Check if decimal already exists and atleast 2 digits are present after decimal
    if (amount.toString().indexOf('.') !== -1 && amount.toString().split('.')[1].length < 2) {
        addDecimal = false
    }


    currency = currency || '$'
    var finalAmount = number({ num: amount, seperatingDigits: seperatingDigits, seperator: seperator })

    return currency + finalAmount + (addDecimal && ".00" || "")
}

module.exports = currency