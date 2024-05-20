function arrayToList ({ array, seperator = ",", capitalizeFirstLetter = false, removeWhiteSpace = true, addCommaSpaces = true}) {
    if (!Array.isArray(array)) {
        throw new Error('Invalid array')
    }

    if (typeof seperator !== 'string') {
        throw new Error('Invalid seperator')
    }

    if (typeof capitalizeFirstLetter !== "boolean") {
        throw new Error('Invalid capitalizeFirstLetter')
    }

    if(removeWhiteSpace) {
        array = array.map((item) => {
            return new String(item).trim()
        })
    }

    if (capitalizeFirstLetter) {
        array = array.map((item) => {
            return item.charAt(0).toUpperCase() + item.slice(1)
        })
    }

    if(addCommaSpaces) {
        seperator = seperator + " "
    }

    return array.join(seperator)
}

module.exports = arrayToList