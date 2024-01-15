
import { bandSiteApi } from "./band-site-api.js";
const commentform = document.getElementById('commentsForm');
class comment {
    constructor(name, comment) {
        this.name = name;
        this.comment = comment;
    }
}
commentform.addEventListener('submit', function (event) {
    event.preventDefault();
    const formNameVal = event.target.username.value;
    const formTextVal = event.target.usertext.value;

    if (formNameVal !== '' && formTextVal !== '') {
        try {

            let newComment = new comment(formNameVal, formTextVal);
            bandSiteApi.postComment(newComment)
            console.log(newComment);

            event.target.reset();
        } catch (error) {
            console.log(error);
        }

    }

});


let CommentsPosted = bandSiteApi.getComments();