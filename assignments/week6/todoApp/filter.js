//filter the todos
export default function filterTodo(event) {
  const list = document.getElementById("lists");
  const todos = list.childNodes;
  todos.forEach((todo) => {
    if (event.target.id === "active") {
      if (todo.classList.contains("completed")) {
        todo.style.display = "none";
      } else {
        todo.style.display = "inherit";
      }
      return;
    }
    if (event.target.id === "completed") {
      if (!todo.classList.contains("completed")) {
        todo.style.display = "none";
      } else {
        todo.style.display = "inherit";
      }
      return;
    } else {
      todo.style.display = "inherit";
      return;
    }
  });
}
