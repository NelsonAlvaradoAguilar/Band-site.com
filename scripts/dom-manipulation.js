export const commentsContainer = document.getElementById("commentsContainer");

export let mainDom = (comment) => {
  const newComment = document.createElement("div"),
    avatarPic = document.createElement("img"),
    formMockup = document.createElement("div"),
    name = document.createElement("h1"),
    date = document.createElement("p"),
    paragraphComment = document.createElement("p"),
    fieldParagraph = document.createElement("div"),
    divider = document.createElement("div"),
    nameDateC = document.createElement("div"),
    deleteComment = document.createElement("button");
  date.insertAdjacentText(
    "afterbegin",
    new Date(comment.timestamp).toLocaleDateString()
  ),
    name.insertAdjacentText("beforeend", `${comment.name} `),
    paragraphComment.insertAdjacentText("beforeend", `${comment.comment}`),
    deleteComment.insertAdjacentText("beforeend", "Delete");
  newComment.appendChild(formMockup),
    formMockup.appendChild(fieldParagraph),
    fieldParagraph.appendChild(nameDateC),
    nameDateC.appendChild(name),
    nameDateC.appendChild(date),
    formMockup.insertAdjacentElement("afterbegin", avatarPic),
    fieldParagraph.appendChild(paragraphComment),
    fieldParagraph.appendChild(deleteComment),
    newComment.insertAdjacentElement("afterbegin", divider);
  commentsContainer.insertAdjacentElement("afterbegin", newComment);
  commentsContainer.classList.add("comments__posting-container");
  date.classList.add("comments__date");
  divider.classList.add("line-divider");
  nameDateC.classList.add("comments__name-date");
  divider.classList.add("comments__line-divider");
  formMockup.classList.add("comments__form-mockup");
  avatarPic.classList.add("comments__avatar-pic");
  newComment.classList.add("comments__posted-text");
  fieldParagraph.classList.add("comments__field-paragraph");
  deleteComment.classList.add("comments__delete-comment");

  return newComment;
};

//shows dom//

export let showsDom = function (e) {
  const divUl = document.createElement("div"),
    ul = document.createElement("ul"),
    liDate = document.createElement("li"),
    spanDate = document.createElement("span"),
    liVenue = document.createElement("li"),
    spanVenue = document.createElement("span"),
    liLocation = document.createElement("li"),
    spanLocation = document.createElement("span"),
    buyButton = document.createElement("a"),
    devider = document.createElement("div");

  divUl.appendChild(ul);
  divUl.appendChild(devider);
  ul.appendChild(liDate);
  ul.appendChild(spanDate);
  ul.appendChild(liVenue);
  ul.appendChild(spanVenue);
  ul.appendChild(liLocation);
  ul.appendChild(spanLocation);
  ul.appendChild(buyButton);

  divUl.insertAdjacentElement("afterbegin", ul);
  ul.insertAdjacentElement("afterend", buyButton);
  liDate.insertAdjacentHTML("afterbegin", "Date");
  spanDate.insertAdjacentHTML(
    "afterbegin",
    new Date(e.date).toLocaleDateString()
  );
  liVenue.insertAdjacentHTML("beforeend", "Venue");
  spanVenue.insertAdjacentHTML("beforeend", `${e.place}`);
  liLocation.insertAdjacentHTML("beforeend", "Location");
  spanLocation.insertAdjacentHTML("beforeend", `${e.location}`);
  buyButton.insertAdjacentText("beforeend", "BUY TICKETS");
  ul.insertAdjacentElement("beforeend", buyButton);

  //adding classname//
  liDate.classList.add("shows__subtitle");
  spanDate.classList.add("shows__info--date");

  liVenue.classList.add("shows__subtitle");
  spanVenue.classList.add("shows__info");

  liLocation.classList.add("shows__subtitle");
  spanLocation.classList.add("shows__info");

  buyButton.classList.add("shows__btnbuy");

  ul.classList.add("shows__tour");
  devider.classList.add("shows__devider");
  divUl.classList.add("shows__list");

  return divUl;
};
