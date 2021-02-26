
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
console.log(countBasketPrice(basket))

let basket = document.querySelector(".basket");
 */

let basket = {
    "product1": {
        "count": 0,
        "price": 0
    },
    "product2": {
        "count": 0,
        "price": 0
    }
}
let menu = document.querySelector(".basket")

menu.onclick = event => {
    if (event.target.classList.contains("plus")) {
        plus(event.target.dataset.id);
    };
    if (event.target.classList.contains("minus")) {
        minus(event.target.dataset.id);
    };
}


const plus = id => {
    basket[id]['count']++;
    basket[id]['price'] += 7000;
    createBasket();
}

const minus = id => {
    if (basket[id]['count'] - 1 == 0 || basket[id]['count'] == 0) {
        deleteCount(id);
        deletePrice(id);
        return true;
    } else {
        basket[id]['count']--;
        basket[id]['price'] -= 7000;

    };
    createBasket();
}

const deleteCount = id => {
    delete basket[id]['count'];
    createBasket();
}

const deletePrice = id => {
    delete basket[id]['price'];
    createBasket();
}

const createBasket = () => {
    console.log(basket);
}

createBasket();

