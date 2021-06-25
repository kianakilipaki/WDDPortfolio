import { getLocation } from "./utilities.js";
import Quake from "./quake.js";
import QuakesView from "./quakeView.js";

// Quake controller
export default class QuakesController {
  constructor(parentElement, position = null) {
    this.parentElement = parentElement;
    // let's give ourselves the option of using a location other than the current location by passing it in.
    this.position = position || {
      lat: 0,
      lon: 0,
    };
    // this is how our controller will know about the model and view...we add them right into the class as members.
    this.quakes = new Quake();
    this.quakesView = new QuakesView();
  }
  async init() {
    await this.initPos();
    this.getQuakesByRadius(100);
  }
  async initPos() {
    // if a position has not been set
    if (this.position.lat === 0) {
      try {
        const loc = await getLocation();
        this.position.lat = loc.coords.latitude;
        this.position.lon = loc.coords.longitude;
        console.log(this.position);
        // try to get the position using getLocation()
        // if we get the location back then set the latitude and longitude into this.position
      } catch (error) {
        console.log(error);
      }
    }
  }

  async getQuakesByRadius(radius = 100) {
    // this method provides the glue between the model and view. Notice it first goes out and requests the appropriate data from the model, then it passes it to the view to be rendered.
    //set loading message
    this.parentElement.innerHTML = "Loading...";
    // get the list of quakes in the specified radius of the location
    const quakeList = await this.quakes.getEarthQuakesByRadius(
      this.position,
      100
    );
    console.log(quakeList);
    // render the list to html
    this.quakesView.renderQuakeList(quakeList, this.parentElement);
    // add a listener to the new list of quakes to allow drill down in to the details
    this.parentElement.addEventListener("touchend", (e) => {
      this.getQuakeDetails(e.target.dataset.id);
    });
  }
  async getQuakeDetails(quakeId) {
    const quake = this.quakes.getQuakeById(quakeId);
    this.quakesView.renderQuake(quake, this.parentElement);
    // get the details for the quakeId provided from the model, then send them to the view to be displayed
  }
}

const quake = new QuakesController(quakeList);
quake.init();