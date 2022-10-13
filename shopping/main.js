import addToCart from "./functions/addToCart.js";
import removeFromCart from "./functions/removeFromCart.js";
import createElement from "./functions/createElement.js";

const inventoryList = document.querySelector("#inventory")
const cartList = document.querySelector("#cart")

/**
 * Inventory of Product
 * @type { {name: string, price: number}[] }
 */
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

/**
 * Renders Inventory Products
 * @param product {{name: string, price: number}}
 */
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

/**
 * Renders Items in Cart
 * @param product {{name: string, price: number, amount: number}} Product
 * @param productIndex {number} Index of Product in Cart
 */
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

/**
 * Renders CartList with Cart-Items
 */
function render() {

    cartList.innerHTML = ""
    warenkorb.forEach(renderCartItem)

}