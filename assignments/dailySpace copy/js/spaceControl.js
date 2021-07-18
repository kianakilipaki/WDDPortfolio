import spaceModel from "./spaceModel.js";
import spaceView from "./spaceView.js";

// Space Mission Control Center
class spaceController {
  constructor() {
    this.img = document.getElementById("img");
    this.details = document.getElementById("imgDetails");
    this.nav = document.getElementById("spaceNav");
    this.spaceStuff = new spaceModel();
    this.spaceView = new spaceView();
  }

  async init() {
    this.img.innerHTML = "Loading...";
    // get daily image
    const imgDetails = await this.spaceStuff.getDailySpaceStuff();
    // render landing page
    this.spaceView.renderMainView(imgDetails, this.img, this.details);
    // add menu items
    this.addMenu();
  }
  async addMenu() {
    const spaceRay = await this.spaceStuff.getRandomSpacer();
    this.spaceView.renderSpaceNav(spaceRay, this.nav, this.img, this.details);
    await this.addToggles();
  }
  async addToggles() {
    const menuToggle = document.querySelector(".nav-arrow");
    const menu = document.querySelector("#spaceNav");
    const detailsToggle = document.querySelector(".arrow");
    const details = document.querySelector("#imgDetails");
    const zoom = document.querySelector("#img");

    menuToggle.addEventListener("click", () => {
      menuToggle.classList.toggle("active");
      menu.classList.toggle("active");
    });
    menuToggle.addEventListener("touchend", () => {
      menuToggle.classList.toggle("active");
      menu.classList.toggle("active");
    });
    zoom.addEventListener("click", () => {
      zoom.classList.toggle("zoom-out");
    });
    menu.addEventListener("click", () => {
      menuToggle.classList.toggle("active");
      menu.classList.toggle("active");
    });
    menu.addEventListener("touchend", () => {
      menuToggle.classList.toggle("active");
      menu.classList.toggle("active");
    });
    detailsToggle.addEventListener("click", () => {
      detailsToggle.classList.toggle("active");
      details.classList.toggle("active");
    });
    details.addEventListener("click", () => {
      detailsToggle.classList.toggle("active");
      details.classList.toggle("active");
    });
  }
}

const space = new spaceController();
space.init();
