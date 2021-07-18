/**********************
 * Space Mission View *
 **********************/

export default class spaceView {
  // render main view
  renderView(details, imgParent, detailsParent, linkParent) {
    console.log(details);
    imgParent.innerHTML = this.renderSpaceImg(details);
    detailsParent.innerHTML = this.renderSpaceInfo(details);
    linkParent.innerHTML = this.renderSpaceLinks();
  }
  // render space image or video
  renderSpaceImg(details) {
    var url = details.hdurl;
    if (details.media_type == "video") {
      url = details.url;
      return `<iframe src="${url}"></iframe>`;
    } else if (details.hdurl == undefined) {
      url = details.url;
    }
    return `<img class="zoom" src="${url}" alt="Space Img">`;
  }
  // render space image details
  renderSpaceInfo(details) {
    if (details.copyright == undefined) {
      details.copyright = "Unknown";
    }
    const item =
      `<img class="arrow color" src="./assets/circle-down.svg" alt="click for more">` +
      `<h1>${details.title}</h1>` +
      `<h5>${details.date}</h5>` +
      `<h3>${details.copyright}</h3>` +
      `<p>${details.explanation}</p>`;
    return item;
  }
  // render the other links
  renderSpaceLinks() {
    const item = `<img class="menu color" src="./assets/more-vertical.svg" alt="more icon" >
      <button class="randomizer color">Random Spacer</button>
      <img class="star color" src="./assets/star.svg" alt="fav" />
      <img class="share color" src="./assets/share2.svg" alt="share" />
      <div class="favsList color">Favorites</div>`;
    return item;
  }
  // render favorites list
  renderSpaceFavs(list, parent) {
    console.log(list);
    if (list.length < 1) {
      return "Click the star to add to your favorite!";
    }
    parent.innerHTML = `<h3>Spacer Favorites:</h3>`;
    let favList = document.createElement("ul");
    favList.setAttribute("id", "openFav");
    list.forEach((e) => {
      let item = document.createElement("li");
      item.setAttribute("id", e.title);
      item.setAttribute("class", "fav");
      item.innerHTML = `${e.title}` + `<span class="delete">X</span>`;
      favList.appendChild(item);
    });
    return parent.appendChild(favList);
  }
}
