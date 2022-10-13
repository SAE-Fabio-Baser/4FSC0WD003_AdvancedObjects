import cart from "./functions"

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

const warenkorb = []

cart.add(warenkorb, inventory[0])
cart.add(warenkorb, inventory[0], 10)
cart.add(warenkorb, inventory[0])

cart.remove(warenkorb, 0, 10)

console.log(warenkorb)