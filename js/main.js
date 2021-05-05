// create array
const links = [{
    label: "Week1 Notes",
    url: "assignments/week1/story_editor.html"
  },
  {
    label: "Week2 Notes",
    url: "assignments/week2/notes.html"
  },
  {
    label: "Week2 Team Activity",
    url: "assignments/week2/team-activity.html"
  },
  {
    label: "Week3 Notes",
    url: "assignments/week3/notes.txt"
  },
  {
    label: "Quiz Ninja",
    url: "assignments/week3/quiz_ninja.html"
  },
]

// fill list with array items
let list = '';
links.forEach(link => {
  list += "<li><a href='" + link['url'] + "' >" + link['label'] + "</a></li>";
});
document.getElementById("link-list").innerHTML = list;