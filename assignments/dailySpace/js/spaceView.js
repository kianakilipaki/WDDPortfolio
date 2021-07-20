/**********************
 * Space Mission View *
 **********************/

export default class spaceView {
  // render main view
  renderView(details, favs, imgParent, detailsParent, linkParent) {
    console.log(details);
    this.details = details;
    this.favs = favs;
    imgParent.innerHTML = this.renderSpaceImg(details);
    detailsParent.innerHTML = this.renderSpaceInfo(details);
    detailsParent.classList.remove("active");
    linkParent.classList.remove("active");
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
    let item = `<img class="arrow" src="./assets/circle-down.svg" alt="click for more">`;
    if (details.isStarred) {
      item += `<div class="star starred">&#9733;</div>`;
    } else {
      item += `<div class="star">&#9733;</div>`;
    }
    item +=
      `<img class="share color" src="./assets/share2.svg" this.svg="./assets/share2.svg" alt="share" />` +
      `<div class="shareOptions">` +
      this.renderShare() +
      `</div>` +
      `<h1>${details.title}</h1>` +
      `<h5>${details.date}</h5>` +
      `<h3>${details.copyright}</h3>` +
      `<p>${details.explanation}</p>`;
    return item;
  }
  // render the other links
  renderSpaceLinks() {
    const item =
      `<img class="menu" src="./assets/more-vertical.svg" alt="more icon" >` +
      `<div class="x color">X</div>` +
      `<button class="randomizer color">Random Spacer</button>` +
      `<div class="favsList color">` +
      this.renderSpaceFavs() +
      `</div>`;
    return item;
  }
  // render favorites list
  renderSpaceFavs() {
    if (this.favs == null || this.favs.length == 0) {
      return "Click the star to add to your favorite!";
    }
    let item = `<h2>Spacer Favorites:</h2><ul>`;
    this.favs.forEach((e) => {
      item += `<li id="${e.title}" class="fav">${e.title}</li>`;
    });
    item += `</ul>`;
    return item;
  }
  renderShare() {
    let item =
      `<a href="https://www.pinterest.com/" target=”_blank”><img src="./assets/pinterest.svg" /></a>` +
      `<a href="https://www.facebook.com/" target=”_blank”><img src="./assets/facebook.svg" /></a>` +
      `<a href="https://www.tumblr.com/"" target=”_blank”><img src="./assets/tumblr.svg" /></a>`;
    return item;
  }
}
