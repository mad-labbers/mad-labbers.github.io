import html from './html.js';
import inputApi from './data/input-api.js';

function makeTemplate() {
    return html`
        <form id="game">
            <fieldset>
                <Legend>Enter a Word</Legend>

                <label for="foreign-country">foreign-country</label>
                <input class="word" type="text" name="foreign-country" id="foreign-country">
                
                <label for="adverb1">adverb1</label>
                <input class="word" type="text" name="adverb1" id="adverb1">
                
                <label for="adjective1">adjective1</label>
                <input class="word" type="text" name="adjective1" id="adjective1">
                
                <label for="animal">animal</label>
                <input class="word" type="text" name="animal" id="animal">
                
                <label for="verb-ending-in-ing">Noun</label>
                <input class="word" type="text" name="verb-ending-in-ing" id="verb-ending-in-ing">
                
                <label for="verb">Noun</label>
                <input class="word" type="text" name="input2" id="input2">
                
                <label for="input2">Noun</label>
                <input class="word" type="text" name="input2" id="input2">
                
                <label for="input2">Noun</label>
                <input class="word" type="text" name="input2" id="input2">
                
                <label for="input2">Noun</label>
                <input class="word" type="text" name="input2" id="input2">
                
                <label for="input2">Noun</label>
                <input class="word" type="text" name="input2" id="input2">
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

            userResponse.input1 = elements.input1.value;
            userResponse.input2 = elements.input2.value;
            console.log(userResponse.input1);
            inputApi.add(userResponse);
            window.location = './results.html';
        });
        return dom();
    }
}