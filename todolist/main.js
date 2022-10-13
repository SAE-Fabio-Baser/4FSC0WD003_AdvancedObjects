const inputField = document.querySelector("input")
const button = document.querySelector("button")
const listElement = document.querySelector("ul")

function addNewTodo() {
    todos.push(inputField.value)
    inputField.value = ""
    renderList()
}

button.addEventListener("click", addNewTodo)

inputField.addEventListener("keydown", function (event) {
    if (event.key === "Enter") {
        addNewTodo(inputField.value)
    }
})

function removeTodo(todosArray, index) {
    todosArray.splice(index, 1)
    renderList()
}

function createTodoElement(text, todoIndex) {

    const listItemElement = document.createElement("li")
    listItemElement.innerText = text

    listItemElement.addEventListener("click", function () {
        removeTodo(todos, todoIndex)
    })

    listElement.appendChild(listItemElement)
}

const todos = ["Wäsche waschen", "Schreibtisch aufräumen"]

renderList()

function renderList() {
    listElement.innerHTML = ""
    todos.forEach(createTodoElement)
}