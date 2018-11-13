import Game1 from './input1.js';
import Game2 from './input2.js';
import Game3 from './input3.js';
import html from './html.js';


function makeTemplate() {
    return html`
        <header></header>
        <section></section>
    `;
}

class Form {
    render() {
        const dom = makeTemplate();
        const gameSection = dom.querySelector('section');
        const game = new Game();
        gameSection.appendChild(game.render());
        return dom;
    }
}

const form = new Form();
const root = document.getElementById('root');
root.appendChild(form.render());

