// Space Mission View
export default class spaceView {
  renderSpaceImg(spaceDetails, element) {
    document.body.style.backgroundImage = `url('${spaceDetails.url}')`;
  }
}
