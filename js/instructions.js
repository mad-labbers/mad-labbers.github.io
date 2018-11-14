import html from './html.js';

function makeTemplate() {
    return html`
        <img class="background-pic" src="http://smartvectorpics.com/wp-content/uploads/2015/02/White-Speech-Bubbles-With-Colorful-Backgrounds-And-Shadows-In-Flat-Designs.png">
        <section class="directions">
            <h1 class="title">How to Play</h1>
            <ol>
                <li>Choose a story theme.</li>
                <li>Input words in the form that match the given direction.</li>
                <li>Click submit to view your completed story. Share with friends as it's sure to bring a laugh!</li>
            </ol>
        </section>
    `;
}

export default class Instructions {
    render() {
        const dom = makeTemplate();
        return dom;
    }
}

const instructions = new Instructions();
const root = document.getElementById('root');
root.appendChild(instructions.render());