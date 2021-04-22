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
  list = "<a href='" + link['url'] + "' ><li>" + link['label'] + "</li></a>";
});
document.getElementById("link-list").innerHTML = list;