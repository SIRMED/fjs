function capitalize ({ string, firstLetterOnly = true }) {
    if (typeof string !== 'string') {
        throw new Error('Invalid string')
    }

    if (firstLetterOnly) {
        return string.charAt(0).toUpperCase() + string.slice(1)
    } else {
        return string.split(' ').map((word) => {
            return word.charAt(0).toUpperCase() + word.slice(1)
        }).join(' ')
    }
}

module.exports = capitalize