// Space Mission Data retrieval aka Space Model

export default class spaceModel {
  constructor() {
    this.baseURL = "https://api.nasa.gov/planetary/apod";
    this.key = "10KKguAG4A8eJFPe0xDXCBbNlGmcPuW27Y2b7r4Z";
    this.url = this.baseURL + "?api_key=" + this.key;
  }

  getDailySpaceStuff() {
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

  saveToLS(imgDetails) {
    localStorage.setItem("spaces", JSON.stringify(imgDetails));
  }

  getFromLS() {
    return JSON.parse(localStorage.getItem("spaces"));
  }
}
