import html from './html.js';
import inputApi from '../data/input-api.js';

function makeTemplate() {
    return html`
        <form id="game">
            <fieldset>
                <h1>Enter a Word</h1>
                <div class="input form">

                    <div>
                        <label for="noun">noun</label>
                        <input class="word" type="text" name="noun" id="noun">
                    </div>

                    <div>    
                        <label for="wackystate">Wacky State</label>
                        <input class="word" type="wackystate" name="wackystate" id="wackystate">
                    </div>

                    <div>    
                        <label for="verb">verb</label>
                        <input class="word" type="text" name="verb" id="verb">
                    <div>

                    <div>    
                        <label for="noun2">noun</label>
                        <input class="word" type="text" name="noun2" id="noun2">
                    </div>

                    <div>    
                        <label for="propername">Proper Name</label>
                        <input class="word" type="text" name="propername" id="propername">
                    </div>

                    <div>    
                        <label for="verb2">verb</label>
                        <input class="word" type="text" name="verb2" id="verb2">
                    </div>

                    <div>    
                        <label for="noun3">noun</label>
                        <input class="word" type="text" name="noun3" id="noun3">
                    </div>

                    <div>    
                        <label for="verb3">verb</label>
                        <input class="word" type="text" name="verb3" id="verb3">
                    </div>

                    <div>    
                        <label for="noun4">noun</label>
                        <input class="word" type="text" name="noun4" id="noun4">
                    </div>

                    <div>    
                        <label for="bodypart">bodypart</label>
                        <input class="word" type="text" name="bodypart" id="bodypart">
                    </div>

                    <div>
                        <label for="city">city</label>
                        <input class="word" type="text" name="city" id="city">
                    </div>

                    <div>    
                        <label for="activity">activity</label>
                        <input class="word" type="text" name="activity" id="activity">
                    </div>

                    <div>
                        <label for="chainrestaurant">chain restaurant</label>
                        <input class="word" type="text" name="chainrestaurant" id="chainrestaurant">
                    </div>

                    <div>
                        <label for="verbpasttense">verb past tense</label>
                        <input class="word" type="text" name="verbpasttense" id="verbpasttense">
                    </div>

                    <div>
                        <label for="month">month</label>
                        <input class="word" type="text" name="month" id="month">
                    </div>

                    <div>
                        <label for="verb4">verb</label>
                        <input class="word" type="text" name="verb4" id="verb4">
                    </div>

                    <div>
                        <label for="noun4">noun4</label>
                        <input class="word" type="text" name="noun4" id="noun4">
                    </div>

                    <div>
                        <label for="verbpasttense2">verb past tense</label>
                        <input class="word" type="text" name="verbpasttense2" id="verbpasttense2">
                    </div>

                    <div>
                        <label for="adjective">adjective</label>
                        <input class="word" type="text" name="adjective" id="adjective">
                    </div>

                    <div>
                        <label for="typeofworkers">type of workers</label>
                        <input class="word" type="text" name="typeofworkers" id="typeofworkers">
                    </div>

                    <div>
                        <label for="noun5">noun</label>
                        <input class="word" type="text" name="noun5" id="noun5">
                    </div>

                    <div>
                        <label for="verbpasttense3">verb past tense</label>
                        <input class="word" type="text" name="verbpasttense3" id="verbpasttense3">
                    </div>

                    <div>
                        <label for="famousperson">famous person</label>
                        <input class="word" type="text" name="famousperson" id="famousperson">
                    </div>

                    <div>
                        <label for="noun6">noun</label>
                        <input class="word" type="text" name="noun6" id="noun6">
                    </div>

                    <div>
                        <label for="personintheroom">person in the room</label>
                        <input class="word" type="text" name="personintheroom" id="personintheroom">
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
            userResponse.month = elements.month.value;
            userResponse.verb4 = elements.verb4.value;
            userResponse.noun4 = elements.noun4.value;
            userResponse.verbpasttense2 = elements.verbpasttense2.value;
            userResponse.adjective = elements.adjective.value;
            userResponse.typeofworkers = elements.typeofworkers.value;
            userResponse.noun5 = elements.noun5.value;
            userResponse.verbpasttense3 = elements.verbpasttense3.value;
            userResponse.famousperson = elements.famousperson.value;
            userResponse.noun6 = elements.noun6.value;
            userResponse.personintheroom = elements.personintheroom.value;
            
            
            inputApi.add(userResponse);
            
            window.location = './results.html';
        });
        return dom;
    }
}