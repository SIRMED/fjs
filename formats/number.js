function number({ num, seperatingDigits = 3, seperator = "," }) {
    if (typeof num === 'string') {
        if(!num.match(/^\d+$/)) {
            throw new Error('Invalid number')
        }
    } else if (typeof num === 'number') {
        num = num.toString()
    } else {
        throw new Error('Invalid number')
    }

    if (typeof seperatingDigits !== 'string' || typeof seperatingDigits !== 'number') {
        throw new Error('Invalid seperatingDigits')
    }

    num = new String(num).split('')

    for (let i = num.length - seperatingDigits; i > 0; i -= seperatingDigits) {
        num.splice(i, 0, seperator)
    }

    return num.join('')
}

module.exports = number;