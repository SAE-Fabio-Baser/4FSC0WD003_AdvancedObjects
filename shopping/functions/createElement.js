/**
 * createElement — Creates and returns an HTMLElement
 * @param parent {HTMLElement} Parent-Node the created element gets appended to
 * @param type {string} Type of HTML-Element
 * @param text {string} Bodytext of new Element
 * @returns {HTMLElement}
 */
function createElement(parent, type, text) {

    const element = document.createElement(type)
    element.innerText = text

    parent.appendChild(element)
    return element
}

export default createElement