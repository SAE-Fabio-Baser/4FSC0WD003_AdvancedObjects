function removeFromCart(cart, index, amount = 1) {
    const product = cart[index]
    const newAmount = product.amount - amount

    if (newAmount < 0) {
        delete cart[index]
    } else {
        product.amount = newAmount
    }
}

export default removeFromCart