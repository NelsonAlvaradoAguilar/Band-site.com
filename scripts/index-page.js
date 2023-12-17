
let todayDate = new Date();

const $timeStamp = todayDate.toLocaleDateString();

let commentsArray = [{
    date: '02/17/2021',
    username: 'Connor Walton',
    usertext: 'This is art. This is inexplicable magic expressed in the purest way, everything that makes up this majestic work deserves reverence. Let us appreciate this for what it is and what it contains.',


}, {
    date: '01/09/2021',
    username: 'Emilie Beach',
    usertext: 'I feel blessed to have seen them in person. What a show! They were just perfection. If there was one day of my life I could relive, this would be it. What an incredible day.',


}, {
    date: '12/20/2020',
    username: 'Miles Acosta',
    usertext: 'I can not stop listening. Every time I hear one of their songs - the vocals - it gives me goosebumps. Shivers straight down my spine. What a beautiful expression of creativity. Can not get enough.',


}

];


const commentsContainer = document.getElementById('commentsContainer');
commentsContainer.classList.add('comments-container')
    const commentform = document.getElementById('commentsForm');

commentform.addEventListener('submit', function (event) {
    event.preventDefault();
    const formNameVal = event.target.username.value;
    const formTextVal = event.target.usertext.value;


    if (formNameVal !== '' && formTextVal !== '') {
        commentsArray.push({
            date: $timeStamp,

            username: formNameVal,
            usertext: formTextVal,
        });

   
        renderNewComments(); 
        event.target.reset();

    }


});


function renderNewComments() {



    commentsContainer.innerHTML='';

   commentsArray.forEach(function (comment) {

        const newComment = document.createElement('div'),
            $avatarPic = document.createElement('img'),
            $formMockup = document.createElement('div'),
            $name = document.createElement('h1'),
            $date = document.createElement('p'),
            $paragraphComment = document.createElement('p'),
            $fieldParagraph = document.createElement('div'),
            $divider = document.createElement('div'),
            $nameDateC = document.createElement('div');

        $date.insertAdjacentText('afterbegin', `${comment.date}`),
            $name.insertAdjacentText('beforeend', `${comment.username} `),
            $paragraphComment.insertAdjacentText('beforeend', `${comment.usertext}`);


        newComment.appendChild($formMockup),
            $formMockup.appendChild($fieldParagraph),
            $fieldParagraph.appendChild($nameDateC),
            $nameDateC.appendChild($name),
            $nameDateC.appendChild($date),
            $formMockup.insertAdjacentElement('afterbegin', $avatarPic),
            $fieldParagraph.appendChild($paragraphComment),
            newComment.insertAdjacentElement('afterbegin', $divider);


        commentsContainer.insertAdjacentElement('afterbegin', newComment);

        
        $date.classList.add('comments__date')
        $divider.classList.add("line-divider")
        $nameDateC.classList.add('comments__name-date')
        $divider.classList.add("line-divider")
        $formMockup.classList.add('comments__form-mockup')
        $avatarPic.classList.add('comments__avatar-pic')
        newComment.classList.add('comments__posted')
        $fieldParagraph.classList.add('comments__field-paragraph')
    });

};
let displaysDefault=function () {
    renderNewComments(); 
}

displaysDefault();
