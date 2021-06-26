import spaceModel from "./spaceModel.js";
import spaceView from "./spaceView.js";

// Space Mission Control Center
class spaceController {
  constructor(parent) {
    this.parent = document.getElementById(parent);
    this.spaceStuff = new spaceModel();
    this.spaceView = new spaceView();
  }

  async init() {
    this.parent.innerHTML = "Loading...";
    // get daily image
    const imgDetails = await this.spaceStuff.getDailySpaceStuff();
    // render landing page
    this.spaceView.renderSpaceImg(imgDetails, this.parent);
    // save to LocalStorage
    this.spaceStuff.saveToLS(imgDetails);
  }
}

const space = new spaceController("main-container");
window.addEventListener("load", space.init());
