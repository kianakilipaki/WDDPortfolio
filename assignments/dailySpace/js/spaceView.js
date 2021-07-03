// Space Mission View
export default class spaceView {
  renderMainView(spaceDetails, element) {
    element.innerHTML =
      this.renderSpaceImg(spaceDetails.hdurl) +
      this.renderSpaceInfo(spaceDetails);
  }
  renderSpaceImg(url) {
    return `<div class="img-container">
      <img class="fill" src="${url}">
      </div>`;
  }
  renderSpaceInfo(details) {
    if (details.copyright == undefined) {
      details.copyright = "Unknown";
    }
    const item =
      `<div class="arrow"></div>` +
      `<div class="imgDetails">` +
      `<h1>${details.title}</h1>` +
      `<h5>${details.date}</h5>` +
      `<h3>${details.copyright}</h3>` +
      `<p>${details.explanation}</p></div>`;
    return item;
  }
  renderSpaceNav(list, nav, parent) {
    nav.innerHTML =
      `<h1>Want More?</h1>` + `<h4>Here are five random Space photos:</h4>`;
    list.forEach((element) => {
      let item = document.createElement("li");
      item.innerHTML = `${element.title}`;
      item.addEventListener("click", () => {
        this.renderMainView(element, parent);
      });
      return nav.appendChild(item);
    });
  }
}
