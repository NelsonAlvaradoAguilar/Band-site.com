import { bandSiteApi } from "./band-site-api.js";
import { commentsContainer } from "./dom-manipulation.js";
const commentform = document.getElementById("commentsForm");

class comment {
  constructor(name, comment) {
    this.name = name;
    this.comment = comment;
  }
}

commentform.addEventListener("submit", function (event) {
  event.preventDefault();
  const formNameVal = event.target.username.value;
  const formTextVal = event.target.usertext.value;

  if (formNameVal !== "" && formTextVal !== "") {
    try {
      let newComment = new comment(formNameVal, formTextVal);
      bandSiteApi.postComment(newComment);
      console.log(newComment);

      event.target.reset();
    } catch (error) {
      console.log(error);
    }
  }
});

const deleteComment = document.getElementsByClassName(
  "comments__delete-comment"
);
document.addEventListener("click", function (e) {
  if (e.target.classList.contains("comments__delete-comment")) {
    const commentId = e.target.getAttribute("id");
    console.log(commentId);
    bandSiteApi.deleteComment(commentId);
  }
});
console.log(deleteComment);
function length(params) {
  bandSiteApi.getComments();
}
let CommentsPosted = bandSiteApi.getComments();
