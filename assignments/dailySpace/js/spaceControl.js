import spaceModel from "./spaceModel.js";
import spaceView from "./spaceView.js";

/********************************
 * Space Mission Control Center *
 ********************************/

class spaceController {
  constructor() {
    this.imgParent = document.querySelector(".img-container");
    this.detailsParent = document.querySelector(".details-container");
    this.linksParent = document.querySelector(".links-container");
    this.spaceModel = new spaceModel();
    this.spaceView = new spaceView();
  }
  async init() {
    this.imgParent.innerHTML = "Loading...";
    // get space image details
    const daily = await this.spaceModel.getDaily();
    // render daily img
    this.addView(daily);
  }
  async addView(details) {
    this.details = details;
    // render landing page
    this.spaceView.renderView(
      details,
      this.imgParent,
      this.detailsParent,
      this.linksParent
    );
    // add click events
    this.addEvents();
  }
  addEvents() {
    window.addEventListener("touchend", async (e) => {
      const clicked = e.path[0];
      console.log(e.path[0].classList[0]);
      switch (e.path[0].classList[0]) {
        // add logo event, back to daily
        case "logo":
          this.init();
          break;
        // add get random space img event
        case "randomizer":
          let random = await this.spaceModel.getRandom();
          this.addView(random[0]);
          break;
        // add open menu event
        case "menu":
          this.menu = clicked;
          this.linksParent.classList.toggle("active");
          clicked.classList.toggle("active");
          break;
        // add get favorites list from local storage event
        case "favsList":
          let favList = await this.spaceModel.getFavorites();
          this.spaceView.renderSpaceFavs(favList, clicked);
          clicked.classList.toggle("active");
          this.linksParent.classList.toggle("active");
          this.menu.classList.toggle("active");
          break;
        // add selected favorite to main view
        case "fav":
          let favDetails = await this.spaceModel.getFavoriteByName(
            e.path[0].id
          );
          console.log(favDetails);
          clicked.classList.toggle("active");
          this.addView(favDetails);
          break;
        // remove favorite from list
        case "delete":
          this.spaceModel.delFavoriteByName(e.path[1].id);
          this.init();
          break;
        // add 'add to favorites' event
        case "star":
          this.spaceModel.saveFavorites(this.details);
          clicked.classList.toggle("active");
          break;
        // add share img event
        case "share":
          clicked.classList.toggle("active");
          break;
        // add zoom image event
        case "zoom":
          clicked.classList.toggle("active");
          break;
        // add slide details into view event
        case "arrow":
          clicked.classList.toggle("active");
          this.detailsParent.classList.toggle("active");
          break;
        // add slide details out of view event
        case "details-container":
          clicked.classList.toggle("active");
          break;
        default:
          break;
      }
    });
  }
}

const space = new spaceController();
space.init();
