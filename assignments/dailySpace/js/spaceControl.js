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
    this.daily = daily;
    // render daily img
    this.addView(daily);
    // add click events
    this.addEvents();
  }
  async addView(details) {
    // get favorites
    let favList = await this.spaceModel.getFavorites();
    this.details = details;
    // render landing page
    this.spaceView.renderView(
      details,
      favList,
      this.imgParent,
      this.detailsParent,
      this.linksParent
    );
  }
  addEvents() {
    document.addEventListener("click" || "touchend", async (e) => {
      const clicked = e.path[0];
      console.log(e);
      switch (e.path[0].classList[0]) {
        // add logo event, back to daily
        case "logo":
          this.addView(this.daily);
          break;
        // add get random space img event
        case "randomizer":
          let random = await this.spaceModel.getRandom();
          this.addView(random[0]);
          this.linksParent.classList.toggle("active");
          break;
        // add open menu event
        case "menu":
          this.linksParent.classList.toggle("active");
          clicked.classList.toggle("active");
          break;
        // add close menu event
        case "x":
          let menu = document.querySelector(".menu");
          this.linksParent.classList.toggle("active");
          menu.classList.toggle("active");
          break;
        // add selected favorite to main view
        case "fav":
          let favDetails = await this.spaceModel.getFavoriteByName(
            e.path[0].id
          );
          this.addView(favDetails);
          this.linksParent.classList.toggle("active");
          break;
        // add and delete 'add to favorites' event
        case "star":
          if (e.path[0].classList[1]) {
            this.spaceModel.delFavoriteByName(e.path[1].id);
            clicked.classList.toggle("starred");
            break;
          } else {
            this.spaceModel.saveFavorites(this.details);
            clicked.classList.toggle("starred");
          }
          break;
        // add share img event
        case "share":
          let opts = document.querySelector(".shareOptions");
          console.log(opts);
          opts.classList.toggle("active");
          break;
        // add zoom image event
        case "zoom":
          if (e.path[0].classList[1] == "active") {
            if (e.path[0].classList[2] == "xz") {
              clicked.classList.toggle("active");
              clicked.classList.toggle("xz");
              break;
            } else {
              clicked.classList.toggle("xz");
              break;
            }
          } else {
            clicked.classList.toggle("active");
            break;
          }
        // add slide details into view event
        case "arrow":
          clicked.classList.toggle("switch");
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
