import createDOMElement from "./createDOMElement.js";

function updateList(listElement, itemArray) {
    listElement.innerHTML = ""
    itemArray.forEach(function (value) {
        createDOMElement(listElement, "li", value)
    })
}

export default updateList