import addToCart from "./functions/addToCart.js";
import removeFromCart from "./functions/removeFromCart.js";
import createElement from "./functions/createElement.js";

const inventoryList = document.querySelector("#inventory")
const cartList = document.querySelector("#cart")

const inventory = [
    {
        name: "Cornflakes",
        price: 3.3
    },
    {
        name: "Cola",
        price: 1
    }
]

function renderProduct(product) {

    const listItem = createElement(inventoryList, "li", product.name)
    createElement(listItem, "span", product.price + "€")

    listItem.addEventListener("click", function () {
        addToCart(warenkorb, product)
        render()
    })
}

/**
 * Warenkorb
 * @type {{name: string, price: number, amount: number}[]}
 */
const warenkorb = []

inventory.forEach(renderProduct)

function renderCartItem(product, productIndex) {

    const listItem = createElement(cartList, "li", product.name)
    createElement(listItem, "span", product.price + "€")
    createElement(listItem, "span", product.amount)

    createElement(listItem, "button", "-")
        .addEventListener("click", function () {
            removeFromCart(warenkorb, productIndex)
            render()
        })

    createElement(listItem, "button", "+")
        .addEventListener("click", function () {
            addToCart(warenkorb, product)
            render()
        })
}

function render() {

    cartList.innerHTML = ""
    warenkorb.forEach(renderCartItem)

}

console.log(warenkorb)