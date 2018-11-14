import html from './html.js';
import inputApi from '../data/input-api.js';

function makeTemplate() {
    return html`
        <form id="game">
            <fieldset>
    
                <h1 class="title">Enter a Word</h1>

                <div class="input-form">
                    <div>
                        <label for="name">Your Name</label>
                        <input class="word" type="text" name="name" id="name">
                    </div>

                    <div>    
                        <label for="number">Number</label>
                        <input class="word" type="number" name="number" id="number">
                    </div>

                    <div>    
                        <label for="verb">Past-Tense Verb</label>
                        <input class="word" type="text" name="verb" id="verb">
                    <div>

                    <div>    
                        <label for="place">Place</label>
                        <input class="word" type="text" name="place" id="noun2">
                    </div>

                    <div>    
                        <label for="adjective">Adjective</label>
                        <input class="word" type="text" name="adjective" id="adjective">
                    </div>

                    <div>    
                        <label for="adjective2">Adjective</label>
                        <input class="word" type="text" name="adjective2" id="adjective2">
                    </div>

                    <div>    
                        <label for="noun3">Noun</label>
                        <input class="word" type="text" name="noun3" id="noun3">
                    </div>

                    <div>    
                        <label for="adjective3">Adjective</label>
                        <input class="word" type="text" name="adjective3" id="adjective3">
                    </div>
                    
                    <div>    
                        <label for="noun4">Noun</label>
                        <input class="word" type="text" name="noun4" id="noun4">
                    </div>

                    <div>    
                        <label for="verb2">Verb</label>
                        <input class="word" type="text" name="verb2" id="verb2">
                    </div>

                    <div>    
                        <label for="verb3">Verb</label>
                        <input class="word" type="text" name="verb3" id="verb3">
                    </div>

                    <div>    
                        <label for="verb4">Verb</label>
                        <input class="word" type="text" name="verb4" id="verb4">
                    </div>

                    <div>
                        <label for="noun5">Noun</label>
                        <input class="word" type="text" name="noun5" id="noun5">
                    </div>

                    <div>    
                        <label for="verb5">Verb</label>
                        <input class="word" type="text" name="verb5" id="verb5">
                    </div>

                    <div>
                        <label for="noun6">Noun</label>
                        <input class="word" type="text" name="noun6" id="noun6">
                    </div>

                    <div>
                        <label for="verb6">Verb</label>
                        <input class="word" type="text" name="verb6" id="verb6">
                    </div>

                    <div>
                        <label for="noun7">Noun</label>
                        <input class="word" type="text" name="noun7" id="noun7">
                    </div>

                    <div>    
                        <label for="noun8">Noun</label>
                        <input class="word" type="text" name="noun8" id="noun8">
                    </div>
                </div>
            
            </fieldset>

            <button type="submit">Submit</button>
        </form>
    `;
}

export default class Game2 {
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

            userResponse.name = elements.name.value;
            userResponse.number = elements.number.value;
            userResponse.verb = elements.verb.value;
            userResponse.noun2 = elements.noun2.value;
            userResponse.adjective = elements.adjective.value;
            userResponse.adjective2 = elements.adjective2.value;
            userResponse.noun3 = elements.noun3.value;
            userResponse.adjective3 = elements.adjective3.value;
            userResponse.noun4 = elements.noun4.value;
            userResponse.verb2 = elements.verb2.value;
            userResponse.verb3 = elements.verb3.value;
            userResponse.verb4 = elements.verb4.value;
            userResponse.noun5 = elements.noun5.value;
            userResponse.verb5 = elements.verb5.value;
            userResponse.noun6 = elements.noun6.value;
            userResponse.verb6 = elements.verb6.value;
            userResponse.noun7 = elements.noun7.value;
            userResponse.noun8 = elements.noun8.value;
            
            inputApi.add(userResponse);
            
            window.location = './results.html';
        });
        return dom;
    }
}