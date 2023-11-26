const fromEuroToDollar = function(valueInEuro) {
    // Convertimos el valor a dólares
    let valueInDollar = valueInEuro * 1.07;
    // Retornamos el valor en dólares
    return valueInDollar;
}

// One euro is:
let oneEuroIs = {
    "JPY": 156.5, // japan yen
    "USD": 1.07, // us dollar
    "GBP": 0.87, // british pound
    // "EURO" : 1.07, // 
}

const fromDollarToYen = () => {
    return oneEuroIs.USD * oneEuroIs.JPY
}

// const fromEuroToDollar = () => {
//     return oneEuroIs.EURO * oneEuroIs.USD
// }

const fromYenToPound = () => {
    return oneEuroIs.JPY * oneEuroIs.GBP
}

module.exports = {fromDollarToYen, fromEuroToDollar, fromYenToPound};