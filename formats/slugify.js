function slugify ({ url, whiteSpaceCharacter }) {
    if (typeof url !== 'string') {
        throw new Error('Invalid url')
    }

    whiteSpaceCharacter = whiteSpaceCharacter || '-'

    return url.toLowerCase().replace(/\s+/g, whiteSpaceCharacter)
}

module.exports = slugify