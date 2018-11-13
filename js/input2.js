import html from './html.js';
import inputApi from '../data/input-api.js';

function makeTemplate() {
    return html`
        <form id="game">
            <fieldset>
                <Legend>Enter a Word</Legend>

                <label for="noun">Noun</label>
                <input class="word" type="text" name="noun" id="noun">
                
                <label for="number">Number</label>
                <input class="word" type="number" name="number" id="number">
                
                <label for="verb">Verb</label>
                <input class="word" type="text" name="verb" id="verb">
                
                <label for="noun2">Noun</label>
                <input class="word" type="text" name="noun2" id="noun2">
                
                <label for="adjective">Adjective</label>
                <input class="word" type="text" name="adjective" id="adjective">
                
                <label for="adjective2">Adjective</label>
                <input class="word" type="text" name="adjective2" id="adjective2">
                
                <label for="noun3">Noun</label>
                <input class="word" type="text" name="noun3" id="noun3">
                
                <label for="adjective3">Adjective</label>
                <input class="word" type="text" name="adjective3" id="adjective3">
                
                <label for="noun4">Noun</label>
                <input class="word" type="text" name="noun4" id="noun4">
                
                <label for="verb2">Verb</label>
                <input class="word" type="text" name="verb2" id="verb2">
                
                <label for="verb3">Verb</label>
                <input class="word" type="text" name="verb3" id="verb3">
                
                <label for="noun5">Noun</label>
                <input class="word" type="text" name="noun5" id="noun5">
                
                <label for="verb4">Verb</label>
                <input class="word" type="text" name="verb4" id="verb4">

                <label for="noun6">Noun</label>
                <input class="word" type="text" name="noun6" id="noun6">

                <label for="verb5">Verb</label>
                <input class="word" type="text" name="verb5" id="verb5">

                <label for="noun7">Noun</label>
                <input class="word" type="text" name="noun7" id="noun7">
                
                <label for="noun8">Noun</label>
                <input class="word" type="text" name="noun8" id="noun8">

                <label for="name">Your Name</label>
                <input class="word" type="text" name="name" id="name">
            </fieldset>

            <button type="submit">Submit</button>
        </form>
    `;
}

export default class Game {
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

            userResponse.foreignCountry = elements['foreign-country'].value;
            userResponse.adverb1 = elements.adverb1.value;
            userResponse.adjective1 = elements.adjective1.value;
            userResponse.animal = elements.animal.value;
            userResponse.verbIng1 = elements['verb-ing1'].value;
            userResponse.verb1 = elements.verb1.value;
            userResponse.verbIng2 = elements['verb-ing2'].value;
            userResponse.adverb2 = elements.adverb2.value;
            userResponse.adjective2 = elements.adjective2.value;
            userResponse.aPlace = elements['a-place'].value;
            userResponse.typeOfLiquid = elements['type-of-liquid'].value;
            userResponse.bodyPart = elements['body-part'].value;
            userResponse.verb2 = elements.verb2.value;
            
            inputApi.add(userResponse);
            
            window.location = './results.html';
        });
        return dom;
    }
}