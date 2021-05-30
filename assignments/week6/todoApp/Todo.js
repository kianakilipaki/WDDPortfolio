import renderTodo from "./render.js";
import addToLs from "./ls.js";
import filterTodo from "./filter.js";
import delCheckTodo from "./toggle.js";

var todos = [];
const task = document.getElementById("newTodo");
const btn = document.getElementById("btn");
const list = document.getElementById("lists");
const filter = document.getElementById("filters");

btn.addEventListener("click", addTodo);
list.addEventListener("click", delCheckTodo);
filter.addEventListener("click", filterTodo);

// Add task to todo list
function addTodo(event) {
  event.preventDefault();
  var todo = {
    id: todos.length + 1,
    text: task.value,
    complete: false,
  };

  todos = addToLs(todo);
  task.value = "";
  list.innerHTML = "";
  todos.forEach(renderTodo);
}

// load todo list to start
window.addEventListener("load", () => {
  todos.forEach(renderTodo);
});
