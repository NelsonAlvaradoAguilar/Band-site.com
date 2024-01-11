import {body} from "./classesNtools.js";

import { BandSiteApi, apikey,  } from "./band-site-api.js";

const commentform = document.getElementById('commentsForm');


commentform.addEventListener('submit', function (event) {
    event.preventDefault();
    const formNameVal = event.target.username.value;
    const formTextVal = event.target.usertext.value;

    if (formNameVal !== '' && formTextVal !== '') {
        try {

            let cmment = new body(formNameVal, formTextVal);
           
            let api = new BandSiteApi(apikey).postComment(cmment)
            console.log(cmment);

            event.target.reset();
        } catch (error) {
            console.log(error);
        }

    }

});

let postingComments = new BandSiteApi(apikey).getComments()