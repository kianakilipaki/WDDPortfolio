// ToDo App controller
import todoModel from "./todoModel.js";
import todoView from "./todoView.js";

class todoController {
  constructor(parentId) {
    this.parent = document.getElementById(parentId);
    this.Model = new todoModel();
    this.View = new todoView(parent);
  }

  showTodoList() {
    const todos = this.Model.getAllTodos();
    this.View.renderTodoList(todos, this.parent);
  }

  // submit task
}

const TodoController = new todoController("lists");
window.addEventListener("load", () => {
  TodoController.showTodoList();
});
