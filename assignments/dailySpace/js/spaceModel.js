// Space Mission Data retrieval aka Space Model

export default class spaceModel {
  constructor() {
    this.baseURL = "https://api.nasa.gov/planetary/apod";
    this.key = "10KKguAG4A8eJFPe0xDXCBbNlGmcPuW27Y2b7r4Z";
    this.url = this.baseURL + "?api_key=" + this.key;
    this.spaceRay = this.getFromLS() || [];
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

  addToSpaceRay(imgDetails) {
    const tempSpaceArray = this.getFromLS();
    console.log(tempSpaceArray.title);
    if (tempSpaceArray.includes(imgDetails.title)) {
      console.log("ahhhh");
    } else console.log("nope");

    const newSpaceImg = {
      title: imgDetails.title,
      date: imgDetails.date,
      author: imgDetails.copyright,
      explanation: imgDetails.explanation,
      hdurl: imgDetails.hdurl,
    };
    // this.spaceRay.push(newSpaceImg);
    // this.saveToLS(this.spaceRay);
  }

  saveToLS(spaceRay) {
    window.localStorage.setItem("spaces", JSON.stringify(spaceRay));
  }

  getFromLS() {
    return JSON.parse(window.localStorage.getItem("spaces"));
  }
}
