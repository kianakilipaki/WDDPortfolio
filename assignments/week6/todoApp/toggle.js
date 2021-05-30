import todos from "./ls.js";

// delete or check todo
export default function delCheckTodo(event) {
  const item = event.target;
  console.log(event.target.parentElement);
  if (item.classList.contains("del")) {
    item.parentElement.remove();
    localStorage.removeItem(todos.id === item.parentElement.value);
  }
  if (item.classList[0] === "check") {
    item.parentElement.classList.toggle("completed");
    const todo = todos.map((todo) => todo.id == item.value);
    todo.complete = !todo.complete;
  }
  return;
}
