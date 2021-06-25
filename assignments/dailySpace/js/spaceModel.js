// Space Mission Data retrieval aka Space Model

function getSpaceJSON(url) {
  fetch(url)
    .then((response) => {
      if (!response.ok) {
        throw Error(response.statusText);
      } else {
        return response.json();
      }
    })
    .catch((error) => console.log("There was an error: ", error));
}

export default class spaceModel {
  constructor() {
    this.baseURL = "https://api.nasa.gov/planetary/apod";
    this.key = "10KKguAG4A8eJFPe0xDXCBbNlGmcPuW27Y2b7r4Z";
    this.spaceStuff = [];
  }

  async getDailySpaceStuff() {
    this.spaceStuff = await getSpaceJSON(this.baseURL + "?api_key=" + this.key);
    console.log(this.spaceStuff);
    return this.spaceStuff;
  }
}
