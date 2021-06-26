// Quake View handler
export default class QuakesView {
  renderQuakeList(quakeList, listElement) {
    listElement.innerHTML =
      "<h3>Quakes Near You</h3>" +
      quakeList.features
        .map((quake) => {
          return `<li data-id="${
            quake.id
          }" class="quakes"><span class="date">${new Date(
            quake.properties.time
          )}</span><br>${quake.properties.title}</li>`;
        })
        .join(" ");
  }
  renderQuake(quake, element) {
    const quakeProperties = Object.entries(quake.properties);
    element.innerHTML =
      "<h3>Quake Details</h3>" +
      quakeProperties
        .map((item) => {
          if (item[0] === "time" || item[0] === "updated") {
            return `<li>${item[0]}: ${new Date(item[1])}</li>`;
          } else return `<li>${item[0]}: ${item[1]}</li>`;
        })
        .join("");
  }
}
