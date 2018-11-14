import html from './html.js';
import inputApi from '../data/input-api.js';

function makeTemplate() {
    return html`
        <form id="game">
            <fieldset>
                <h1 class="title">Enter a Word</h1>
                
                <div class="input-form">
                    <div>
                        <label for="color">Color</label>
                        <input class="word" type="text" name="color" id="color">
                    </div>

                    <div>    
                        <label for="superlative">Superlative (ending is -est)</label>
                        <input class="word" type="text" name="superlative" id="superlative">
                    </div>

                    <div>    
                        <label for="adjective1">Adjective</label>
                        <input class="word" type="text" name="adjective1" id="adjective1">
                    <div>

                    <div>    
                        <label for="body-part-plural">Body Part (Plural)</label>
                        <input class="word" type="text" name="body-part-plural" id="body-part-plural">
                    </div>

                    <div>    
                        <label for="body-part">Body Part</label>
                        <input class="word" type="text" name="body-part" id="body-part">
                    </div>

                    <div>    
                        <label for="noun1">Noun</label>
                        <input class="word" type="text" name="noun1" id="noun1">
                    </div>

                    <div>    
                        <label for="animal-plural">Animal (Plural)</label>
                        <input class="word" type="text" name="animal-plural" id="animal-plural">
                    </div>

                    <div>    
                        <label for="adjective2">Adjective</label>
                        <input class="word" type="text" name="adjective2" id="adjective2">
                    </div>
                    
                    <div>    
                        <label for="adjective3">Adjective</label>
                        <input class="word" type="text" name="adjective3" id="adjective3">
                    </div>

                    <div>    
                        <label for="adjective4">Adjective</label>
                        <input class="word" type="text" name="adjective4" id="adjective4">
                    </div>
                </div>
            </fieldset>

            <button type="submit">Submit</button>
        </form>
    `;
}

export default class Game3 {
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

            userResponse.color = elements.color.value;
            userResponse.superlative = elements.superlative.value;
            userResponse.adjective1 = elements.adjective1.value;
            userResponse['body-part-plural'] = elements['body-part-plural'].value;
            userResponse['body-part'] = elements['body-part'].value;
            userResponse.noun1 = elements.noun1.value;
            userResponse['animal-plural'] = elements['animal-plural'].value;
            userResponse.adjective2 = elements.adjective2.value;
            userResponse.adjective3 = elements.adjective3.value;
            userResponse.adjective4 = elements.adjective4.value;
            
            inputApi.add(userResponse);
            
            window.location = './results.html';
        });
        return dom;
    }
}