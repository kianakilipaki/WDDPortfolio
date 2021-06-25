import spaceModel from "./spaceModel.js";

// Space Mission Control Center
class spaceController {
  constructor(parent) {
    this.parent = document.getElementById(parent);
    this.spaceStuff = new spaceModel();
  }

  async init() {
    this.parent.innerHTML = "Loading...";
    // get daily image
    const dailyImg = await this.spaceStuff.getDailySpaceStuff();
    // render landing page
    console.log(dailyImg);
  }
}

const space = new spaceController("main-container");

window.addEventListener("load", space.init());
