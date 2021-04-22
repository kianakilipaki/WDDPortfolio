// create array
const links = [
  {
    label: "Week1 notes",
    url: "week1/index.html"
  }
]

// fill list with array items
var list;
links.forEach(link => {
  list = "<li><a href='" + link['url'] + "' >" + link['label'] + "</a></li>";
});
document.getElementById("link-list").innerHTML = list;