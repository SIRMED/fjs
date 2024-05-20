// function creditCardMask ({ card, asterisks = "*", format = true }) {
//     if (typeof card !== 'string') {
//         throw new Error('Invalid card')
//     }

//     if (card.length > 19) {
//         throw new Error("Supplied credit card number is not a credit card number")
//     }

//     let last4 = new String()
//     for (let index = 0; index < card.length; index++) {
//         const element = card[index];

//         if (index > (card.length - 5)) {
//             last4 = last4 + element
//         }
//     }

//     let maskString = new String()
//     for (let i = 1; i <= 14; i++) {
//         // console.log(i)
//         if (i === 5 || i === 10 || i === 14) {
//             // maskString = maskString + asterisks;
//             console.log("adding whitepsace  ")
//         } else {
//             // maskString = maskString + "-";
//             console
//         }
//     }

//     console.log(maskString)
// }