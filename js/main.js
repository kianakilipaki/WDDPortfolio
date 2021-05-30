// create array
const links = [
  {
    label: "Week1 Notes",
    url: "assignments/week1/story_editor.html",
  },
  {
    label: "Week2 Notes",
    url: "assignments/week2/notes.html",
  },
  {
    label: "Week2 Team Activity",
    url: "assignments/week2/team-activity.html",
  },
  {
    label: "Week3 Notes",
    url: "assignments/week3/notes.txt",
  },
  {
    label: "Quiz Ninja",
    url: "assignments/week3/quiz_ninja.html",
  },
  {
    label: "Week4 Notes",
    url: "assignments/week4/notes.txt",
  },
  {
    label: "Tic-Tac-Toe",
    url: "assignments/week4/tic-tact-toe.html",
  },
  {
    label: "Week5 Notes",
    url: "assignments/week5/notes.txt",
  },
  {
    label: "Week5 Team Activity",
    url: "assignments/week5/teamactivity/index.html",
  },
  {
    label: "ToDo list start",
    url: "assignments/week5/todoApp/index.html",
  },
  {
    label: "ToDo list finished",
    url: "assignments/week6/todoApp/index.html",
  },
];

// fill list with array items
let list = "";
links.forEach((link) => {
  list += "<li><a href='" + link["url"] + "' >" + link["label"] + "</a></li>";
});
document.getElementById("link-list").innerHTML = list;
