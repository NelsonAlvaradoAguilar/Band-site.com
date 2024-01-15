
let subTitles=['Date','Venue','Location']
import { bandSiteApi } from "./band-site-api.js";


const showsContainer = document.getElementById('showsContainer');
showsContainer.classList.add('shows')
const title = document.createElement('h1');
showsContainer.insertAdjacentElement('beforebegin', title)
title.insertAdjacentText('beforeend', 'Shows');
const subTitleBand = document.createElement('div');


 let renderTitles = function () {
    for (let i = 0; i < subTitles.length; i++) {

        const h3 = document.createElement('h3');
        subTitleBand.appendChild(h3);
        h3.insertAdjacentText('beforeend', subTitles[i]);
        showsContainer.insertAdjacentElement('beforebegin', subTitleBand);
        subTitleBand.classList.add('shows__new-subtitle')
        h3.classList.add('shows__new-subtitle--hiden')

    }

}
renderTitles();

document.addEventListener('click', () => {
    const showsList = document.querySelectorAll('.shows__list');

    showsList.forEach(i => {
        i.addEventListener('click', function () {
            showsList.forEach(el => el.classList.remove('shows__list--selected'));
            i.classList.toggle('shows__list--selected');
        });
    });
});


let getShowlist= bandSiteApi.getShows();


title.classList.add('shows__title');
const iframe = document.getElementById("iframe");
iframe.classList.add("hero__songToPlay");
iframe.setAttribute("loading", "eager");











