"use strict";
// ToDo App controller
import todoModel from "./todoModel.js";
import todoView from "./todoView.js";

class todoController {
  constructor() {
    this.TodoModel = new todoModel();
    this.TodoView = new todoView();
  }

  // load todos
  getTodos() {
    var todos;
    todos = this.TodoModel.getTodos();
    console.log(todos);
    this.TodoView.renderTodoList(todos, list);
  }

  // add new todo
  addTodo(event) {
    var task = document.getElementById("newTodo").value;
    console.log(task);
    this.TodoModel.addTodo(task);
  }

  // filter todos
  filterTodo(e) {
    //this.TodoView.filterTodo(e.target);
  }

  // delete or complete task
  delCheckTodo(e) {
    //this.TodoModel.delCheckTodo(e.target);
  }
}

// const task = document.getElementById("newTodo");

const btn = document.getElementById("btn");
const list = document.getElementById("lists");
const filter = document.getElementById("filters");

const Todo = new todoController();

window.addEventListener("load", Todo.getTodos());
btn.addEventListener("click", Todo.addTodo());
list.addEventListener("click", Todo.delCheckTodo());
filter.addEventListener("click", Todo.filterTodo());
