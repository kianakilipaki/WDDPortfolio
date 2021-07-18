// Space Mission View
export default class spaceView {
  renderMainView(spaceDetails, img, details) {
    console.log(spaceDetails.media_type);
    if (spaceDetails.media_type == "video") {
      img.innerHTML = this.renderSpaceVideo(spaceDetails.url);
    } else if (spaceDetails.hdurl == undefined) {
      img.innerHTML = this.renderSpaceImg(spaceDetails.url);
    } else {
      img.innerHTML = this.renderSpaceImg(spaceDetails.hdurl);
    }
    details.innerHTML = this.renderSpaceInfo(spaceDetails);
  }
  renderSpaceImg(url) {
    return `<img class="fill" src="${url}">`;
  }
  renderSpaceVideo(url) {
    return `<iframe src="${url}"></iframe>`;
  }
  renderSpaceInfo(details) {
    if (details.copyright == undefined) {
      details.copyright = "Unknown";
    }
    const item =
      `<h1>${details.title}</h1>` +
      `<h5>${details.date}</h5>` +
      `<h3>${details.copyright}</h3>` +
      `<p>${details.explanation}</p>`;
    return item;
  }
  renderSpaceNav(list, nav, img, details) {
    nav.innerHTML =
      `<h1>Want More?</h1>` + `<h4>Here are five random Space photos:</h4>`;
    list.forEach((e) => {
      let item = document.createElement("li");
      item.innerHTML = `${e.title}`;
      item.addEventListener("click", () => {
        this.renderMainView(e, img, details);
      });
      return nav.appendChild(item);
    });
  }
}
