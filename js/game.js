import input from './input.js';
import html from './html.js';

function makeTemplate() {
    return html`
        <section></section>
    `;
}

class Game {
    render() {
        const dom = makeTemplate();
        
        
        return dom;
    }
}

const game = new Game();
const root = document.getElementById('root');
root.appendChild(game.render());

