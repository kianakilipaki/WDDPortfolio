// create array
const links = [
    {
      label: "Week1 notes",
      url: "week1/index.html"
    }
  ]

// fill list with array links
document.getElementById("link-list").innerHTML = links.forEach(myFunction);

function myFunction() {
  return "<li><a href='" + links.url + "' >" + links.label + "</a></li>";
} 

