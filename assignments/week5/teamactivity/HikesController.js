// Hike controller
import HikeModel from "./HikeModel.js";
import HikesView from "./HikesView.js";

class HikesController {
  constructor(parentId) {
    this.parent = document.getElementById(parentId);
    this.hikeModel = new HikeModel();
    this.hikesView = new HikesView(parentId);
  }

  showHikeList() {
    const hikes = this.hikeModel.getAllHikes();
    this.hikesView.renderHikeList(hikes, this.parent);
    this.addHikeListener();
  }

  showOneHike(hikeName) {
    const hike = this.hikeModel.getHikeByName(hikeName);
    this.hikesView.renderOneHikeFull(this.parent, hike).ontouchend = () => {
      this.showHikeList();
    };
  }

  addHikeListener() {
    const childrenArray = Array.from(this.parent.children);
    childrenArray.forEach((child) => {
      child.addEventListener("touchend", (e) => {
        this.showOneHike(e.currentTarget.dataset.name);
        console.log(e.currentTarget.dataset.name);
      });
    });
  }
}
const myHikesController = new HikesController("hikes");
window.addEventListener("load", () => {
  myHikesController.showHikeList();
});
