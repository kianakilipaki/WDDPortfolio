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
    // save to LocalStorage
    this.spaceStuff.addToSpaceRay(imgDetails);
    // add menu items from LS if there are any.
    this.addMenu();
  }
  async addMenu() {
    const list = await this.spaceStuff.getFromLS();
    this.spaceView.renderSpaceNav(list, this.nav);
  }
}

const space = new spaceController();
window.addEventListener("load", space.init());
