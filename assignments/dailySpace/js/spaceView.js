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
    const item =
      `<div class="panel"><div class="imgDetails">` +
      `<div id="arrow"></div>` +
      `<h1>${details.title}</h1>` +
      `<h5>${details.date}</h5>` +
      `<h3>${details.copyright}</h3>` +
      `<p>${details.explanation}</p></div></div>`;
    return item;
  }
  renderSpaceNav(list, nav) {
    nav.innerHTML = "";
    list.forEach((element) => {
      let item = document.createElement("li");
      item.innerHTML = `${element.title}`;
      return nav.appendChild(item);
    });
  }
}
