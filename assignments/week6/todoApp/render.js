// build one todo for list
export default function renderTodo(todo) {
  const item = document.createElement("li");
  item.innerHTML =
    `<input type="checkbox" class="check" name="item${todo.id}" value="${
      todo.id
    }" ${todo.complete ? "checked" : ""} >` +
    `<label for="item${todo.id}"> ${todo.text} </label>` +
    `<input type="submit" class="del" value="X">`;
  return lists.appendChild(item);
}
