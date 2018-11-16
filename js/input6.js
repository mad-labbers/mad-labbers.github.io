import html from './html.js';
import inputApi from '../data/input-api.js';

function makeTemplate() {
    return html`
        <form id="game">
            <fieldset>
                <h1 class="title">Enter a Word</h1>
                <div class="input-form">
                    <div>
                        <label for="place1">A Place</label>
                        <input class="word" type="text" name="place1" id="place1" required>
                    </div>
                    <div>    
                        <label for="adjective1">Adjective</label>
                        <input class="word" type="text" name="adjective1" id="adjective1" required>
                    </div>
                    <div>
                        <label for="fname">Female Name</label>
                        <input class="word" type="text" name="fname" id="fname" required>
                    </div>  
                    <div>
                        <label for="body-part1">Body Part</label>
                        <input class="word" type="text" name="body-part1" id="body-part1" required>
                    </div>
                    <div>
                        <label for="body-part2">Body Part</label>
                        <input class="word" type="text" name="body-part2" id="body-part2" required>
                    </div>
                    <div>
                        <label for="organ">Human Organ</label>
                        <input class="word" type="text" name="organ" id="organ" required>
                    </div> 
                    <div>
                        <label for="adjective2">Adjective</label>
                        <input class="word" type="text" name="adjective2" id="adjective2" required>
                    </div>  
                    <div>
                        <label for="mname">Male Name</label>
                        <input class="word" type="text" name="mname" id="mname" required>
                    </div> 
                    
                    <div>
                        <label for="adjective3">Adjective</label>
                        <input class="word" type="text" name="adjective3" id="adjective3" required>
                    </div> 
                    <div>
                        <label for="body-part3">Body Part</label>
                        <input class="word" type="text" name="body-part3" id="body-part3" required>
                    </div>  
                    <div>
                        <label for="body-part4">Body Part</label>
                        <input class="word" type="text" name="body-part4" id="body-part4" required>
                    </div>
                    <div>
                        <label for="place2">A Place</label>
                        <input class="word" type="text" name="place2" id="place2" required>
                    </div>    
                </div>
            </fieldset>
            <button type="submit">Submit</button>
        </form>
    `;
}

export default class Game6 {
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

            userResponse.place1 = elements.place1.value;
            userResponse.adjective1 = elements.adjective1.value;
            userResponse.fname = elements.fname.value;
            userResponse.bodyPart1 = elements['body-part1'].value;
            userResponse.bodyPart2 = elements['body-part2'].value;
            userResponse.organ = elements.organ.value;
            userResponse.adjective2 = elements.adjective2.value;
            userResponse.mname = elements.mname.value;
            userResponse.adjective3 = elements.adjective3.value;
            userResponse.bodyPart3 = elements['body-part3'].value;
            userResponse.bodyPart4 = elements['body-part4'].value;
            userResponse.place2 = elements.place2.value;

            inputApi.add(userResponse);
            
            window.location = './results.html';
        });
        return dom;
    }
}
