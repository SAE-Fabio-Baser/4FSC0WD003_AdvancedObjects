import updateList from "./updateList.js";

const list = document.querySelector("ul")
const input = document.querySelector("input")
const button = document.querySelector("button")
const clearBtn = document.querySelector("button.clearButton")

let todos = [ "hallo" ]

clearBtn.addEventListener("click", deleteAll)

function deleteAll() {
    todos = []
    updateList(list, todos)
}

updateList(list, todos)

function addTodo() {
    if (input.value.length === 0) return

    todos.push(input.value)
    input.value = ""
    updateList(list, todos)
}

button.addEventListener("click", addTodo)

input.addEventListener("keydown", function (event) {
    if (event.key === "Enter") {
        addTodo(input.value)
    }
})