/************************************************
 * Space Mission Data retrieval aka Space Model *
 ************************************************/

export default class spaceModel {
  constructor() {
    this.baseURL = "https://api.nasa.gov/planetary/apod";
    this.key = "10KKguAG4A8eJFPe0xDXCBbNlGmcPuW27Y2b7r4Z";
    this.favs = this.getFavorites() ? this.getFavorites() : [];
  }
  // fetch url API from NASA's picture of the day
  async fetchSpaceStuff() {
    return fetch(this.url)
      .then((response) => {
        if (!response.ok) {
          throw Error(response.statusText);
        } else {
          return response.json();
        }
      })
      .catch((error) => console.log("There was an error: ", error));
  }
  // pass daily API key
  getDaily() {
    this.url = this.baseURL + "?api_key=" + this.key;
    return this.fetchSpaceStuff();
  }
  // pass random image API key
  getRandom() {
    this.url = this.baseURL + "?api_key=" + this.key + "&count=1";
    return this.fetchSpaceStuff();
  }
  // save favorite to localstorage
  saveFavorites(fav) {
    var star = {
      isStarred: true,
    };
    Object.assign(fav, star);
    this.favs.push(fav);
    localStorage.setItem("spaceFavs", JSON.stringify(this.favs));
  }
  // get favorites from localstorage
  getFavorites() {
    return JSON.parse(localStorage.getItem("spaceFavs"));
  }
  // get one specific favorite from localstorage
  async getFavoriteByName(name) {
    let favItem = "";
    this.favs.forEach((item) => {
      if (item.title == name) {
        favItem = item;
      }
    });
    return favItem;
  }
  // delete one specific favorite from localstorage
  async delFavoriteByName(name) {
    let favItem = "";
    this.favs.forEach((item) => {
      if (item.title == name) {
        favItem = item;
        console.log(favItem);
      }
    });
    this.favs.splice(favItem - 1, 1);
    localStorage.setItem("spaceFavs", JSON.stringify(this.favs));
  }
}
