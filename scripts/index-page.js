




let commentsArray = [{
    date: '02/17/2021',
    username: 'Connor Walton',
    text: 'This is art. This is inexplicable magic expressed in the purest way, everything that makes up this majestic work deserves reverence. Let us appreciate this for what it is and what it contains.',


}, {
    date: '01/09/2021',
    username: 'Emilie Beach',
    text: 'I feel blessed to have seen them in person. What a show! They were just perfection. If there was one day of my life I could relive, this would be it. What an incredible day.',


}, {
    date: '12/20/2020',
    username: 'Miles Acosta',
    text: 'I can not stop listening. Every time I hear one of their songs - the vocals - it gives me goosebumps. Shivers straight down my spine. What a beautiful expression of creativity. Can not get enough.',


}


];

let displayComments = function () {
    const commentsContainer = document.getElementById('commentsContainer');

    commentsContainer.insertAdjacentHTML('afterbegin', '')


    commentsArray.forEach(comment => {

        const commentElement = document.createElement('div'),

            $titleDiv = document.createElement('div'),
            $name = document.createElement('h1'),
            $date = document.createElement('p'),
            $paragraphComment = document.createElement('p'),
            $divider =document.createElement('div');

        $titleDiv.appendChild($name),
            $titleDiv.appendChild($date),
            commentElement.appendChild($titleDiv),
            commentElement.appendChild($paragraphComment);
           commentElement.appendChild($divider)

        $name.insertAdjacentHTML('afterbegin', `${comment.username} `),
            $date.insertAdjacentHTML('beforeend', `${comment.date}`),
            $paragraphComment.insertAdjacentHTML('beforeend', `${comment.text}`);


        commentsContainer.appendChild(commentElement);
       

        $divider.classList.add("block-interaction")
       
    });


}


displayComments();

