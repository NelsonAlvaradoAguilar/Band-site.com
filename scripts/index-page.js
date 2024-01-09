
import { timeStamp, commentsArray } from "./const-objets-arrays.js";
import {  commentsContainer } from "./functions.js";
import { BandSiteApi, apikey, commen } from "./band-site-api.js";

const commentform = document.getElementById('commentsForm');


commentform.addEventListener('submit', function (event) {
    event.preventDefault();
    const formNameVal = event.target.username.value;
    const formTextVal = event.target.usertext.value;

    if (formNameVal !== '' && formTextVal !== '') {
        try {

            let cmment = new commen(formNameVal, formTextVal);
            let api = new BandSiteApi(apikey).postComment(formNameVal, formTextVal,timeStamp)
            console.log(cmment);

            event.target.reset();
        } catch (error) {
            console.log(error);
        }

    }

});

export let mainDom = (comment) => {
    const newComment = document.createElement('div'),
        avatarPic = document.createElement('img'),
        formMockup = document.createElement('div'),
        name = document.createElement('h1'),
        date = document.createElement('p'),
        paragraphComment = document.createElement('p'),
        fieldParagraph = document.createElement('div'),
        divider = document.createElement('div'),
        nameDateC = document.createElement('div');

    date.insertAdjacentText('afterbegin', `${comment.date}`),
        name.insertAdjacentText('beforeend', `${comment.username} `),
        paragraphComment.insertAdjacentText('beforeend', `${comment.usertext}`);


    newComment.appendChild(formMockup),
        formMockup.appendChild(fieldParagraph),
        fieldParagraph.appendChild(nameDateC),
        nameDateC.appendChild(name),
        nameDateC.appendChild(date),
        formMockup.insertAdjacentElement('afterbegin', avatarPic),
        fieldParagraph.appendChild(paragraphComment),
        newComment.insertAdjacentElement('afterbegin', divider);


    commentsContainer.insertAdjacentElement('afterbegin', newComment);
    commentsContainer.classList.add('comments__posting-container');
    date.classList.add('comments__date')
    divider.classList.add("line-divider")
    nameDateC.classList.add('comments__name-date')
    divider.classList.add("comments__line-divider")
    formMockup.classList.add('comments__form-mockup')
    avatarPic.classList.add('comments__avatar-pic')
    newComment.classList.add('comments__posted-text')
    fieldParagraph.classList.add('comments__field-paragraph')

    return newComment;
}

