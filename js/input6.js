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
                        <input class="word" type="text" name="place1" id="place1">
                    </div>

                    <div>    
                        <label for="adjective1">Adjective</label>
                        <input class="word" type="text" name="adjective1" id="adjective1">
                    </div>

                    <div>
                        <label for="fname">Female Name</label>
                        <input class="word" type="text" name="fname" id="fname">
                    </div>  

                    <div>
                        <label for="body-part1">Body Part</label>
                        <input class="word" type="text" name="body-part1" id="body-part1">
                    </div>

                    <div>
                        <label for="body-part2">Body Part</label>
                        <input class="word" type="text" name="body-part2" id="body-part2">
                    </div>

                    <div>
                        <label for="organ">Human Organ</label>
                        <input class="word" type="text" name="organ" id="organ">
                    </div> 

                    <div>
                        <label for="adjective2">Adjective</label>
                        <input class="word" type="text" name="adjective2" id="adjective2">
                    </div>  

                    <div>
                        <label for="mname">Male Name</label>
                        <input class="word" type="text" name="mname" id="mname">
                    </div> 
                    
                    <div>
                        <label for="adjective3">Adjective</label>
                        <input class="word" type="text" name="adjective3" id="adjective3">
                    </div> 

                    <div>
                        <label for="body-part3">Body Part</label>
                        <input class="word" type="text" name="body-part3" id="body-part3">
                    </div>  

                    <div>
                        <label for="body-part4">Body Part</label>
                        <input class="word" type="text" name="body-part4" id="body-part4">
                    </div>

                    <div>
                        <label for="place2">A Place</label>
                        <input class="word" type="text" name="place2" id="place2">
                    </div>    
                    
                    <div>
                        <label for="name1">A Name</label>
                        <input class="word" type="text" name="name1" id="name1">
                    </div>

                    <div>
                        <label for="animal1">Animal</label>
                        <input class="word" type="text" name="animal1" id="animal1">
                    </div>

                    <div>
                        <label for="verb1">Verb</label>
                        <input class="word" type="text" name="verb1" id="verb1">
                    </div>

                    <div>
                        <label for="number1">Number</label>
                        <input class="word" type="number" name="number1" id="number1">
                    </div>

                    <div>
                        <label for="body-part5">Body Part</label>
                        <input class="word" type="text" name="body-part5" id="body-part5">
                    </div>

                    <div>
                        <label for="adjective4">Adjective</label>
                        <input class="word" type="text" name="adjective4" id="adjective4">
                    </div>

                    <div>
                        <label for="adjective5">Adjective</label>
                        <input class="word" type="text" name="adjective5" id="adjective5">
                    </div>

                    <div>
                        <label for="verb2">Verb (Past Tense)</label>
                        <input class="word" type="text" name="verb2" id="verb2">
                    </div>
                </div>
            </fieldset>

            <button type="submit">Submit</button>
        </form>
    `;
}

export default class Game1 {
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
            userResponse.name1 = elements.name1.value;
            userResponse.animal1 = elements.animal1.value;
            userResponse.verb1 = elements.verb1.value;
            userResponse.number1 = elements.number1.value;
            userResponse.bodyPart5 = elements['body-part5'].value;
            userResponse.adjective4 = elements.adjective4.value;
            userResponse.adjective5 = elements.adjective5.value;
            userResponse.verb2 = elements.verb2.value;

            inputApi.add(userResponse);
            
            window.location = './results.html';
        });
        return dom;
    }
}