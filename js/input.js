import html from './html.js';
import inputApi from './data/input-api.js';

function makeTemplate() {
    return html`
        <form id="game">
            <fieldset>
                <Legend>Enter a Word</Legend>

                <label for="foreign-country">Foreign Country</label>
                <input class="word" type="text" name="foreign-country" id="foreign-country">
                
                <label for="adverb1">Adverb</label>
                <input class="word" type="text" name="adverb1" id="adverb1">
                
                <label for="adjective1">Adjective</label>
                <input class="word" type="text" name="adjective1" id="adjective1">
                
                <label for="animal">Animal</label>
                <input class="word" type="text" name="animal" id="animal">
                
                <label for="verb-ing1">Verb-ing</label>
                <input class="word" type="text" name="verb-ing1" id="verb-ing1">
                
                <label for="verb1">Verb</label>
                <input class="word" type="text" name="verb1" id="verb1">
                
                <label for="verb-ing2">Verb-ing</label>
                <input class="word" type="text" name="verb-ing2" id="verb-ing2">
                
                <label for="adverb2">Adverb</label>
                <input class="word" type="text" name="adverb2" id="adverb2">
                
                <label for="adjective2">Adjective</label>
                <input class="word" type="text" name="adjective2" id="adjective2">
                
                <label for="a-place">A place</label>
                <input class="word" type="text" name="a-place" id="a-place">
                
                <label for="type-of-liquid">Type of liquid</label>
                <input class="word" type="text" name="type-of-liquid" id="type-of-liquid">
                
                <label for="body-part">Body part</label>
                <input class="word" type="text" name="body-part" id="body-part">
                
                <label for="verb2">Verb</label>
                <input class="word" type="text" name="verb2" id="verb2">
            </fieldset>
        </form>
    `;
}

export default class Game {
    constructor() {
        this.words = inputApi.getAll();
    }
    
    render() {
        const dom = makeTemplate();
        const form = dom.querySelector('form');
        form.addEventListener('submit', function(event) {
            event.preventDefault();
            const elements = form.elements;
            const userResponse = {};

            userResponse.foreignCountry = elements.foreignCountry.value;
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
            console.log(userResponse.input1);
            inputApi.add(userResponse);
            window.location = './results.html';
        });
        return dom();
    }
}