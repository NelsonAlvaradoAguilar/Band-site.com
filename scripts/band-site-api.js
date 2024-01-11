
import { commentsContainer, showsDom, mainDom} from "./functions.js";


export const apikey = "bdce068d-52ce-42b1-8bd7-21c91e847d2f"

export class BandSiteApi {
    constructor(apiKey) {
        this.apiKey = apiKey
        this.baseUrl = "https://project-1-api.herokuapp.com/"
    }
    async postComment({ name, comment }) {

        try {

            const response = await axios.post(`${this.baseUrl}comments?api_key=${this.apiKey}`, { name, comment })

            console.log(response.data);

        } catch (error) {
            console.log(error);
        }
        await this.getComments();
    }

    async getComments() {
        try {

            const resp = await axios.get(`${this.baseUrl}comments/?api_key=${this.apiKey}`);

            console.table(resp.data);
            commentsContainer.textContent = '';

            for (var _user of resp.data) {
                commentsContainer.insertAdjacentElement('afterbegin', mainDom(_user));
            }
        }
        catch (err) {
            console.log(err);
        }


    }
  
     getShows = async () => {
        try {
            const resp = await axios.get(`${this.baseUrl}showdates/?api_key=${apikey}`);
            console.table(resp.data);
            for (var _user of resp.data) {
                showsContainer.appendChild(showsDom(_user))
            }
        }
        catch (err) {
            console.log(err);
        }
    
    
    }
    


}















