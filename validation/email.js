function email ({ email }) {
    if (typeof email !== 'string') {
        throw new Error('Invalid email')
    }

    if (!email.match(/^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/)) {
        return false
    }

    return email
}

module.exports = email