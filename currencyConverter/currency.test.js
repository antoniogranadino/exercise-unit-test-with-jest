const {fromDollarToYen, fromEuroToDollar, fromYenToPound} = require("./currency.js")

test("obtener la conversion de una moneda a otra", () => {
    expect(fromDollarToYen(1.07,1)).toBe(167.455);

}) 

test("obtener la conversion de una moneda a otra", () => {
    expect(fromEuroToDollar(1.07,1)).toBe(1.1449);

}) 

test("obtener la conversion de una moneda a otra", () => {
    expect(fromYenToPound(156.5,1)).toBe(136.155);

}) 


