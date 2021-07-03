import spaceModel from "./spaceModel.js";
import spaceView from "./spaceView.js";

// Space Mission Control Center
class spaceController {
  constructor() {
    this.parent = document.getElementById("spaceContainer");
    this.nav = document.getElementById("spaceNav");
    this.spaceStuff = new spaceModel();
    this.spaceView = new spaceView();
  }

  async init() {
    this.parent.innerHTML = "Loading...";
    // get daily image
    const imgDetails = await this.spaceStuff.getDailySpaceStuff();
    // render landing page
    this.spaceView.renderMainView(imgDetails, this.parent);
    // add random menu items
    this.addMenu();
  }
  async addMenu() {
    const spaceRay = await this.spaceStuff.getRandomSpacer();
    this.spaceView.renderSpaceNav(spaceRay, this.nav, this.parent);
    await this.addToggles();
  }
  async addToggles() {
    const menuToggle = document.querySelector(".nav-arrow");
    const menu = document.querySelector("#spaceNav");
    const detailsToggle = document.querySelector(".arrow");
    const details = document.querySelector(".imgDetails");

    menuToggle.addEventListener("click", () => {
      menuToggle.classList.toggle("active");
      menu.classList.toggle("active");
    });
    detailsToggle.addEventListener("click", () => {
      detailsToggle.classList.toggle("active");
      details.classList.toggle("active");
    });
  }
}

const space = new spaceController();
space.init();
