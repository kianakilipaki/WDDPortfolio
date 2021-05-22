// ToDo App controller
import todoModel from "./todoModel.js";
import todoView from "./todoView.js";

class todoController {
  constructor(parentId) {
    this.parent = document.getElementById(parentId);
    this.Model = new todoModel();
    this.View = new todoView(parentId);
  }

  showTodoList() {
    const todos = this.Model.getAllTodos();
    this.View.renderTodoList(todos, this.parent);
  }
}

const TodoController = new todoController();
window.addEventListener("load", () => {
  TodoController.showTodoList();
});
