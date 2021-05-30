// ToDo app Model

export default class todoModel {
  // get list
  getTodos() {
    let todos;
    if (localStorage.getItem("todos") === null) {
      todos = [];
    } else {
      todos = JSON.parse(localStorage.getItem("todos"));
    }
    return todos;
  }

  // add todo
  addTodo(todoText) {
    var todo = {
      id: this.todos ? this.todos.length + 1 : 1,
      text: todoText,
      complete: false,
    };

    if (localStorage.getItem("todos") === null) {
      localStorage.setItem("todos", JSON.stringify(todo));
    } else {
      this.todos.push(todo);
    }
    console.log(todo);
  }

  // mark todo as complete/incomplete
  toggleTodo(id) {
    this.todos = this.todos.map((todo) =>
      todo.id === id
        ? { id: todo.id, text: todo.text, complete: !todo.complete }
        : todo
    );
  }

  // remove todo
  removeTodo(id) {
    this.todos = this.todo.filter((todo) => todo.id !== id);
  }
}
