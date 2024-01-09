
import { timeStamp } from "./const-objets-arrays.js";
import { commentsContainer } from "./functions.js";


export const apikey = "bdce068d-52ce-42b1-8bd7-21c91e847d2f"

export class BandSiteApi {
    constructor(apiKey) {
        this.apiKey = apiKey
        this.baseUrl = "https://project-1-api.herokuapp.com/"
    }
   async postComment(name,comment) {
    
        try {
            const response = await axios.post(`${this.baseUrl}comments?api_key=${this.apiKey}`, { name, comment })
    
            console.log(response.data);
           
        } catch (error) {
            console.log(error);
        }
      this.getComments();
    }
 
     async getComments () {
        try {
            const resp = await axios.get(`${this.baseUrl}comments/?api_key=${this.apiKey}`);
            
            console.table(resp.data);
          
    
             for (var _user of resp.data) {
                 commentsContainer.insertAdjacentElement('afterbegin', mainDom(_user));
             }
        }
        catch (err) {
            console.log(err);
        }
    
    
    }
    
} 
let api2 = new BandSiteApi(apikey).getComments();

export class commen {
    constructor (name,comment)
    {
        this.name=name;
        this.comment=comment;
    }
}


let mainDom = (comment) => {

    const newComment = document.createElement('div'),
        avatarPic = document.createElement('img'),
        formMockup = document.createElement('div'),
        name = document.createElement('h1'),
        date = document.createElement('p'),
        paragraphComment = document.createElement('p'),
        fieldParagraph = document.createElement('div'),
        divider = document.createElement('div'),
        nameDateC = document.createElement('div');
    // like=document.createElement('p');
    date.insertAdjacentText('afterbegin', `${comment.timestamp}`),
        name.insertAdjacentText('beforeend', `${comment.name} `),
        paragraphComment.insertAdjacentText('beforeend', `${comment.comment}`);
    //like.insertAdjacentText('beforeend',`${comment.like}`)
    newComment.appendChild(formMockup),
        formMockup.appendChild(fieldParagraph),
        // formMockup.insertAdjacentElement('beforeend',like)
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




const fetchShows = async () => {
    try {
        const resp = await axios.get(url2);
        console.table(resp.data);
        for (var _user of resp.data) {
            showsContainer.appendChild(showsDom(_user))
        }
    }
    catch (err) {
        console.log(err);
    }


}

