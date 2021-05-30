// delete or check todo
export default function delCheckTodo(event) {
  const item = event.target;
  console.log(event.target);
  if (item.classList.contains("del")) {
    item.parentElement.remove();
    const todo = todos.map(todos.id == item.value);
    todo.remove;
  }
  if (item.classList[0] === "check") {
    item.parentElement.classList.toggle("completed");
    const todo = todos.map((todo) => todo.id == item.value);
    todo.complete = !todo.complete;
  }
  return;
}
