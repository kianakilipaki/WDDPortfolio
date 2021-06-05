//create array for comments
const commentList = [
  {
    name: "Bechler Falls",
    date: "6/4/2021",
    content: "Soooooo amazing",
  },
  {
    name: "Bechler Falls",
    date: "6/2/2021",
    content: "Nice view",
  },
  {
    name: "Teton Canyon",
    date: "6/2/2021",
    content: "Great waterfalls",
  },
];

// class commentsModel {
//   constructor(type) {
//     this.type = type;
//     this.commentList = this.readFromLS(this.type) || [];
//   }

//   writeToLS(key, data) {
//     window.localStorage.setItem(key, JSON.stringify(data));
//   }

//   readFromLS(key) {
//     return JSON.parse(window.localStorage.getItem(key));
//   }
// }

export default class Comments {
  constructor(type, elementId) {
    this.type = type;
    this.elementId = elementId;
    //this.model = new commentsModel("hikes");
  }
  getAllComments() {
    // const commentList = this.model.readFromLS(this.type);
    // console.log(commentList);
    return commentList;
  }
  getCommentsByHike(hikeName) {
    return this.getAllComments().filter((comment) => comment.name === hikeName);
  }
  addComment(name, comment) {
    const newComment = {
      name: name,
      date: new Date(),
      content: comment,
    };
    commentList.push(newComment);
    //this.model.writeToLS(this.type, newComment);
  }
  addButtonListener(hikeName) {
    document.getElementById("commentButton").onclick = () => {
      this.addComment(
        hikeName,
        document.getElementById("commentContent").value
      );
      document.getElementById("commentContent").value = "";
    };
  }
  showCommentList() {
    this.elementId.innerHTML = "";
    renderCommentList(this.elementId, this.getAllComments());
  }
  showHikeComments(hikeName) {
    this.elementId.innerHTML = "";
    this.elementId.appendChild(renderCommentDiv());
    const element = document.getElementById("hikeComments");
    renderCommentList(element, this.getCommentsByHike(hikeName));
    this.addButtonListener(hikeName);
  }
}

function renderCommentList(elementId, comments) {
  elementId.innerHTML = "<h3>Hike Comments</h3>";
  comments.forEach((comment) => {
    let item = document.createElement("li");
    item.innerHTML = `${comment.name}: ${comment.content}`;
    elementId.appendChild(item);
  });
}
function renderCommentDiv() {
  const div = document.createElement("div");
  div.classList.add("addComment");
  div.innerHTML = `<h4>Add a comment about this hike:</h4>
      <input type="text" id="commentContent" />
      <button id="commentButton">Submit</button>
      <div id="hikeComments"></div>`;
  return div;
}
