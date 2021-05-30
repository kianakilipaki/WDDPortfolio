// ToDo App View

export default class todoView {
  // build todo list for view
  renderTodoList(todos, list) {
    console.log(todos);
    list.innerHTML = "";
    todos.forEach((todo) => {
      const item = document.createElement("li");
      item.innerHTML =
        `<input type="checkbox" id="item${todo.id}" name="item${todo.id}" ${
          todo.complete ? "checked" : ""
        } >` +
        `<label for="item${todo.id}"> ${todo.text} </label>` +
        `<input type="submit" id="item${todo.id}" class="del" value="X">`;
      return list.appendChild(item);
    });
  }
}
