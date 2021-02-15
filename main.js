"use strict"
/* progg:
for (let i = 2; i <= 100; i++) {
    for (let j = 2; j < i; j++) {
        if (i % j == 0) continue progg;
    }
    console.log(i);
} */


/* let basket = [1, 2, 4, 5, 6, 45, 23]
let countBasketPrice = basket.reduce(function (acc, elem) {
    return acc + elem;
}, 0)
console.log(countBasketPrice) */


/* for (let i = 0; i <= 9; console.log(i++)) {} */

/* это были задание после 3 урока */


/* function P(a) {
    this.one = (a / 100) - (a % 100) / 100;
    this.two = (a % 100) / 10 - (a % 10) / 10;
    this.three = a % 10;
}

let tr = new P(574)

console.log(tr) */

/* не понял тут, как сделать, чтобы при написании числа больше 999 выдать что либо кроме ошибки */


/* function P(name, number, date, price) {
    this.name = name;
    this.number = number;
    this.date = date;
    this.price = price;
}
let basket = [
    new P("Sam", 123, "19.02", 4583),
    new P("Sam", 124, "19.02", 8542),
    new P("Sam", 125, "19.02", 1238),
    new P("Sam", 126, "19.02", 8632),
    new P("Sam", 127, "19.02", 6500)
]

function countBasketPrice(arr) {
    let sum = 0
    for (let i = 0; i < arr.length; i++) {
        sum += arr[i]["price"]
    }
    return sum
}
console.log(countBasketPrice(basket)) */


