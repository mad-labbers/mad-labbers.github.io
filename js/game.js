import html from './html.js';
import inputApi from './data/input-api.js';

function makeTemplate() {
    return html`
        <form id="game">
            <fieldset>
                <Legend>Enter a Word</Legend>

                <label for="input1">Verb</label>
                <input class="word" type="text" name="input1" id="input1">
                
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
            const word = {};

            word.input1 = elements.input1.value;
            word.input2 = elements.input2.value;
            console.log(word.input1);
            inputApi.add(word);
            window.location = './results.html';
        });
        return dom();
    }
}