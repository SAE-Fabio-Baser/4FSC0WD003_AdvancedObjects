function addToCart(cart, product, amount = 1) {

    const productIndex = cart.indexOf(product)

    if (productIndex === -1) {
        // gibts noch nich

        product.amount = 1
        cart.push(product)
    } else {
        // gibts
        product.amount += amount
    }
}

export default addToCart