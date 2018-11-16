import html from './html.js';
import inputApi from '../data/input-api.js';

function makeTemplate() {
    return html`
        <form id="game">
            <fieldset>
                <h1 class="title">Enter a Word</h1>
                <div class="input-form">
                    <div>
                        <label for="adjective">Adjective</label>
                        <input class="word" type="text" name="adjective" id="adjective">
                    </div>

                    <div>    
                        <label for="pluralnoun">Plural Noun</label>
                        <input class="word" type="pluralnoun" name="pluralnoun" id="pluralnoun">
                    </div>

                    <div>    
                        <label for="noun">Noun</label>
                        <input class="word" type="text" name="noun" id="noun">
                    <div>

                    <div>    
                        <label for="adjective2">Adjective</label>
                        <input class="word" type="text" name="adjective2" id="adjective2">
                    </div>

                    <div>    
                        <label for="bodypart">Body part</label>
                        <input class="word" type="text" name="bodypart" id="bodypart">
                    </div>

                    <div>    
                        <label for="adjective3">Adjective</label>
                        <input class="word" type="text" name="adjective3" id="adjective3">
                    </div>

                    <div>    
                        <label for="pluralnoun2">Plural Noun</label>
                        <input class="word" type="text" name="pluralnoun2" id="pluralnoun2">
                    </div>

                    <div>    
                        <label for="bodypart2">Body part</label>
                        <input class="word" type="text" name="bodypart2" id="bodypart2">
                    </div>

                    <div>    
                        <label for="adjective4">Adjective</label>
                        <input class="word" type="text" name="adjective4" id="adjective4">
                    </div>

                    <div>    
                        <label for="adverb">Adverb</label>
                        <input class="word" type="text" name="adverb" id="adverb">
                    </div>

                    <div>
                        <label for="noun2">Noun</label>
                        <input class="word" type="text" name="noun2" id="noun2">
                    </div>

                    <div>    
                        <label for="bodypart3">Body Part</label>
                        <input class="word" type="text" name="bodypart3" id="bodypart3">
                    </div>

                    <div>
                        <label for="adverb2">Adverb</label>
                        <input class="word" type="text" name="adverb2" id="adverb2">
                    </div>

                </div>
            </fieldset>
            <button type="submit">Submit</button>
        </form>
    `;
}

export default class Game4 {
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

            userResponse.adjective = elements.adjective.value;
            userResponse.pluralnoun = elements.pluralnoun.value;
            userResponse.noun = elements.noun.value;
            userResponse.adjective2 = elements.adjective2.value;
            userResponse.bodypart = elements.bodypart.value;
            userResponse.adjective3 = elements.adjective3.value;
            userResponse.pluralnoun2 = elements.pluralnoun2.value;
            userResponse.bodypart2 = elements.bodypart2.value;
            userResponse.adjective4 = elements.adjective4.value;
            userResponse.adverb = elements.adverb.value;
            userResponse.noun2 = elements.noun2.value;
            userResponse.bodypart3 = elements.bodypart3.value;
            userResponse.adverb2 = elements.adverb2.value;
            
            inputApi.add(userResponse);
            
            window.location = './results.html';
        });
        return dom;
    }
}