// create array
const links = [
  {
    label: "Week1 Notes",
    url: "assignments/week1/story_editor.html"
  }
]

// fill list with array items
var list;
links.forEach(link => {
  list = "<li><a href='" + link['url'] + "' >" + link['label'] + "</a></li>";
});
document.getElementById("link-list").innerHTML = list;