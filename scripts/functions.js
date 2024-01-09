import { mainDom } from "./index-page.js";
import { commentsArray, } from "./const-objets-arrays.js";
export const formComments=[]

export const commentsContainer = document.getElementById('commentsContainer');




export let fetchComments = function () {

    commentsContainer.textContent = '';
    for (var user of commentsArray) {
        commentsContainer.insertAdjacentElement('afterbegin', mainDom(user));
    }

}



export let renderDefault = function () {


    for (var user of commentsArray) {
        commentsContainer.insertAdjacentElement('afterbegin', mainDom(user));
    }

}


//shows dom//
/*
export let showsDom = function (e) {
    const divUl = document.createElement("div"),


            ul = document.createElement('ul'),
            liDate = document.createElement('li'),
            spanDate = document.createElement('span'),
            liVenue = document.createElement('li'),
            spanVenue = document.createElement('span'),
            liLocation = document.createElement('li'),
            spanLocation = document.createElement('span'),
            buyButton = document.createElement('a'),
            devider = document.createElement("div")
            ;

       
        divUl.appendChild(ul);
        divUl.appendChild(devider);
        ul.appendChild(liDate);
        ul.appendChild(spanDate);
        ul.appendChild(liVenue);
        ul.appendChild(spanVenue);
        ul.appendChild(liLocation);
        ul.appendChild(spanLocation);
        ul.appendChild(buyButton);


        divUl.insertAdjacentElement('afterbegin', ul);
        ul.insertAdjacentElement('afterend', buyButton);
        liDate.insertAdjacentHTML('afterbegin', 'Date');
        spanDate.insertAdjacentHTML('afterbegin', `${e.date}`);
        liVenue.insertAdjacentHTML('beforeend', 'Venue');
        spanVenue.insertAdjacentHTML('beforeend', `${e.place}`);
        liLocation.insertAdjacentHTML('beforeend', 'Location');
        spanLocation.insertAdjacentHTML('beforeend', `${e.location}`);
        buyButton.insertAdjacentText('beforeend', "BUY TICKETS");
        ul.insertAdjacentElement('beforeend', buyButton);

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
}*/
