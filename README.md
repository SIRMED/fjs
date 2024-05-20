# `fjs`

FJS (FormatJS) is a JavaScript library that provides easy-to-use functions for modifying, formatting, and validating data.
[![install size](https://packagephobia.com/badge?p=@sirmed/fjs)](https://packagephobia.com/result?p=@sirmed/fjs)

# Example Usage
```
import { currency } from "@sirmed/fjs"

function Checkout() {
  const amount = "899" 
  const fjs-amount = currency({ amount, currency: "$"})

  return (
    <>
      <h1>{amount}</h1>     // 899
      <h1>{fjs-amount}</h1> // $899.00
    </>
  );
}
```

# Documentation

# Formats
This includes functions which modify and return the changed data

### number ({ num, seperatingDigits, seperator })
Add commas (or your custom seperator in `seperator`)

| Input | Type | Default Value | Required |
|-------|------|------|-------|
| num   | `String`, `Number` | none | ✅ |
| seperatingDigits | `String`, `Number`  | `3` | ❌ |
| seperator | `String` | `,` | ❌ |

`num` is the String or Number which you want to format. By default
if only `num` is provided it will format the number by seperating it
into chunks of 3 numbers and seperate them by commas
```
number({ num: "1123123" })
// 1,123,123
```

&nbsp;
Defining `seperatingDigits` will break the number into chunks of "`seperatingDigits`" then add the seperator
```
number({ num: "1123123", seperatingDigits: 1 })
// 1,1,2,3,1,2,3
```

&nbsp;
Defining `seperator` will use the supplied `seperator` instead of
using the default value "`,`"
```
number({ num: "1123123", seperatingDigits: 1, seperator: "_" })
// 1_1_2_3_1_2_3
```



### currency ({ amount, currency, addDecimal, seperatingDigits, seperator })
Format the given amount into a standard recognizable currency format

| Input | Type | Default Value | Required |
|-------|------|------|-------|
| amount| `string`, `number` | none | ✅ |
| currency | `string`  | `$` | ❌ |
| addDecimal | `boolean` | `true` | ❌ |
| seperatingDigits | `string`, `number`  | `3` | ❌ |
| seperator | `string` | `,` | ❌ |

`amount` is the String or Number which you want to format. By default
if only `amount` is provided it will format the amount by seperating it into chunks of 3 numbers, seperated by commas with 2 leading zeros after the deciaml and the `$` sign before the amount
```
currency({ amount: "1399" })
// $1,399.00
```

&nbsp;
Defining `currency` will replace the default currency value of `$`
and use the provided value instead
```
currency({ amount: "388407", currency: "PKR. " })
// PKR. 388,407.00
```

&nbsp;
`addDecimal` is a `boolean` value. It is `true` by default. Adding
`false` to `addDecimal` will not add the trailing double zeros and decimal at the end
```
currency({ amount: "388407", currency: "PKR. ", addDecimal: false })
// PKR. 388,407
```

&nbsp;
Defining `seperatingDigits` will break the number into chunks of "`seperatingDigits`" then add the seperator
```
currency({ amount: "388407", currency: "PKR. ", addDecimal: false, seperatingDigits: 2 })
// PKR. 38,84,07
```

&nbsp;
Defining `seperator` will use the supplied `seperator` instead of
using the default value "`,`"
```
currency({ amount: "388407", currency: "PKR. ", addDecimal: false, seperatingDigits: 2, seperator: "." })
// PKR. 38.84.07
```

### phone ({ phone, countryCode })
Break up the provided phone number into country code, area code and subscriber number

| Input | Type | Default Value | Required |
|-------|------|------|-------|
| phone | `String`, `Number` | none | ✅ |
| countryCode | `String`  | none | ❌ |

`phone` is the number which will be broken up into the area code and subscriber number. Area code is the first 4 digits of the number and subscriber number are the remaining digits. They are seperated by a whitespace. No country code will be added if it isn't provided
```
phone({ phone: "01234567890" })
// 0123 4567890
```

&nbsp;
Adding `countryCode` add the country code to the start of the formated phone number.
```
phone({ phone: "01234567890", countryCode: "92" })
// +92 0123 4567890
```

### capitalize ({ string, firstLetterOnly })
Capitalize the first letter

| Input | Type | Default Value | Required |
|-------|------|------|-------|
| string | `string` | none | ✅ |
| firstLetterOnly | `boolean`  | `true` | ❌ |

`string` is the string whose letters are to be capitalized
```
capitalize({ string: "the quick brown fox got tired of jumping" })
// The quick brown fox got tired of jumping
```

&nbsp;
`firstLetterOnly` is a `boolean` which is `true` by default. Setting it to `false` will capitalize every first letter of every word
```
capitalize({ string: "the quick brown fox got tired of jumping", firstLetterOnly: false })
// The Quick Brown Fox Got Tired Of Jumping
```


### slugify ({ url, whiteSpaceCharacter })
Encode a given string into a URL safe format

| Input | Type | Default Value | Required |
|-------|------|------|-------|
| url | `String` | none | ✅ |
| whiteSpaceCharacter | `String`  | `-` | ❌ |

The value in `url` will be formatted to a URL-safe format by removing whitespaces
```
slugify({ url: "https://github.com/sirmed mehmood" })
// https://github.com/sirmed-mehmood
```

&nbsp;
Adding your own `whiteSpaceCharacter` will use the provided string instead of a hyphen (`-`)
```
slugify({ url: "https://github.com/sirmed mehmood", whiteSpaceCharacter: "+" })
// https://github.com/sirmed+mehmood
```


### arrayToList ({ array, seperator, capitalizeFirstLetter, removeWhiteSpace, addCommaSpaces})
Returns a single String with the items in the array

| Input | Type | Default Value | Required |
|-------|------|------|-------|
| array | `String` | none | ✅ |
| seperator | `String`  | `,` | ❌ |
| capitalizeFirstLetter | `boolean`  | `false` | ❌ |
| removeWhiteSpace | `boolean`  | `true` | ❌ |
| addCommaSpaces | `boolean`  | `true` | ❌ |


All the values in `array` will be formatted and compiled into a single string which will be returned
```
arrayToList ({ array = ["apple", "Oranges", " Bananas "] })
// apple, Oranges, Bananas
```

&nbsp;
`addCommaSpaces` defines weather or not a whitespace will be added after each comma (or your own seperator)
```
arrayToList ({ array = ["apple", "Oranges ", " Bananas "], addCommaSpaces = false })
// Apple,Oranges,Bananas
```

&nbsp;
`seperator` is the character or string which will be used to seperate the formatted words
```
arrayToList ({ array = ["apple", "Oranges", " Bananas "], seperator = " |" })
// Apple | Oranges | Bananas
```

&nbsp;
`capitalizeFirstLetter` defines weather if the first letter of each string will be formatted or not to a capital one
```
arrayToList ({ array = ["apple", "Oranges", " Bananas "], capitalizeFirstLetter = true })
// Apple, Oranges, Bananas
```

&nbsp;
`removeWhiteSpace` defines weather or not the leading and trailing whitespaces in an item of an array are to be removed or not
```
arrayToList ({ array = ["apple", "Oranges ", " Bananas "], removeWhiteSpace = false })
// Apple, Oranges ,  Bananas 
```


# Validation
This includes functions which perform a check on the given items and return the object if it passes (`true`) and returns `false` if the provided item fails the check

### email ({ email })
Perform a check on the value of the object in `email` to match with a standard email address

| Input | Type | Default Value | Required |
|-------|------|------|-------|
| email | `String` | none | ✅ |

#### Scenario 1
```
email ({ array = "sirmed@gmail" })
// Returns: false
```

#### Scenario 2
```
email ({ array = "sirmed@gmail.com" })
// Returns: sirmed@gmail.com
```