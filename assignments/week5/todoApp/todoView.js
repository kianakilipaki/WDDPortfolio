// ToDo App View

export default class todoView {
  renderTodoList(todos, parent) {
    console.log(todos);
    parent.innerHTML = "";
    todos.forEach((todo) => {
      parent.appendChild(this.renderOneTodo(todo));
    });
  }

  renderOneTodo(todo) {
    const item = document.createElement("li");
    item.innerHTML = `<div>${todo.text}</div>`;
    return item;
  }
}
