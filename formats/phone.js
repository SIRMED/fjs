function phone ({ phone, countryCode }) {
    if (typeof countryCode === "string" || typeof countryCode === "number") {
        countryCode = new String(countryCode).replace(" ", "") || '1'

        if (countryCode.includes('+')) {
            countryCode = countryCode.substring(1)
        }
    } else if (typeof countryCode !== "undefined") {
        throw new Error("countryCode is of an un-supported value")
    }

    if (typeof phone === 'string' && !phone.match(/^\d+$/)) {
        throw new Error('Invalid number')
    }

    if (phone.length < 7 || phone.length > 15) {
        throw new Error('Invalid phone number')
    }

    const cleanPhone = phone.replace(/\D/g, '');
    const areaCode = cleanPhone.substring(0, 4);
    const subscriberNumber = cleanPhone.substring(4);

    if (typeof countryCode !== "undefined") {
        return `+${countryCode} ${areaCode} ${subscriberNumber}`;
    } else {
        return `${areaCode} ${subscriberNumber}`
    }
}

module.exports = phone