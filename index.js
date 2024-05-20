const number = require("./formats/number")
const slugify = require("./formats/slugify")
const capitalize = require("./formats/capitalize")
const arrayToList = require("./formats/arrayToList")
const phone = require("./formats/phone")
const currency = require("./formats/currency")

const email = require("./validation/email")

const fjs = {
    number,
    currency,
    phone,
    arrayToList,
    capitalize,
    slugify,
    email
}

module.exports = fjs