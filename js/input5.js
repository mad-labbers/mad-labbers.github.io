import html from './html.js';
import inputApi from '../data/input-api.js';

function makeTemplate() {
    return html`
        <form id="game">
            <fieldset>
                <h1 class="title">Enter a Word</h1>
                <div class="input form">
                    <div>
                        <label for="noun">Noun</label>
                        <input class="word" type="text" name="noun" id="noun">
                    </div>

                    <div>    
                        <label for="wackystate">Wacky State</label>
                        <input class="word" type="wackystate" name="wackystate" id="wackystate">
                    </div>

                    <div>    
                        <label for="verb">Verb (Past Tense)</label>
                        <input class="word" type="text" name="verb" id="verb">
                    <div>

                    <div>    
                        <label for="noun2">Noun</label>
                        <input class="word" type="text" name="noun2" id="noun2">
                    </div>

                    <div>    
                        <label for="propername">Proper Name</label>
                        <input class="word" type="text" name="propername" id="propername">
                    </div>

                    <div>    
                        <label for="verb2">Verb (end in -ing)</label>
                        <input class="word" type="text" name="verb2" id="verb2">
                    </div>

                    <div>    
                        <label for="noun3">Noun</label>
                        <input class="word" type="text" name="noun3" id="noun3">
                    </div>

                    <div>    
                        <label for="verb3">Verb</label>
                        <input class="word" type="text" name="verb3" id="verb3">
                    </div>

                    <div>    
                        <label for="noun4">Noun</label>
                        <input class="word" type="text" name="noun4" id="noun4">
                    </div>

                    <div>    
                        <label for="bodypart">Body Part</label>
                        <input class="word" type="text" name="bodypart" id="bodypart">
                    </div>

                    <div>
                        <label for="city">City</label>
                        <input class="word" type="text" name="city" id="city">
                    </div>

                    <div>    
                        <label for="activity">Activity</label>
                        <input class="word" type="text" name="activity" id="activity">
                    </div>

                    <div>
                        <label for="chainrestaurant">Chain Restaurant</label>
                        <input class="word" type="text" name="chainrestaurant" id="chainrestaurant">
                    </div>

                    <div>
                        <label for="verbpasttense">Verb (Past Tense)</label>
                        <input class="word" type="text" name="verbpasttense" id="verbpasttense">
                    </div>
                </div>
            </fieldset>
            <button type="submit">Submit</button>
        </form>
    `;
}

export default class Game5 {
    constructor() {
        this.userResponses = inputApi.getAll();
    }
    render() {
        const dom = makeTemplate();
        const form = dom.querySelector('form');
        form.addEventListener('submit', function(event) {
            event.preventDefault();
            const elements = form.elements;
            const userResponse = {};

            userResponse.noun = elements.noun.value;
            userResponse.wackystate = elements.wackystate.value;
            userResponse.verb = elements.verb.value;
            userResponse.noun2 = elements.noun2.value;
            userResponse.propername = elements.propername.value;
            userResponse.verb2 = elements.verb2.value;
            userResponse.noun3 = elements.noun3.value;
            userResponse.verb3 = elements.verb3.value;
            userResponse.noun4 = elements.noun4.value;
            userResponse.bodypart = elements.bodypart.value;
            userResponse.city = elements.city.value;
            userResponse.activity = elements.activity.value;
            userResponse.chainrestaurant = elements.chainrestaurant.value;
            userResponse.verbpasttense = elements.verbpasttense.value;
            
            inputApi.add(userResponse);
            
            window.location = './results.html';
        });
        return dom;
    }
}