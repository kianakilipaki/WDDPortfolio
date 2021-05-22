// ToDo app Model

export default class todoModel {
  constructor() {
    // here iss the todo list array
    this.todos = [
      { id: 1, text: "Take out the Trash", complete: false },
      { id: 2, text: "Do the Dishes", complete: false },
    ];
  }

  // get list
  getAllTodos() {
    return this.todos;
  }

  // add to list

  // mark tasks as complete

  // remove task

  // filter list
}
