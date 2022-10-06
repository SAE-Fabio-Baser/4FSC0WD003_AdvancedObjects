function createListItem(parentElement, type, text) {
    const listItem = document.createElement(type)
    listItem.innerText = text

    listItem.addEventListener("click", function () {
        listItem.classList.toggle("done")
    })

    parentElement.appendChild(listItem)
}

export default createListItem