import Game1 from './input1.js';
import Game2 from './input2.js';
// import Game3 from './input3.js';
import html from './html.js';
import userApi from '../data/user-api.js';

function makeTemplate() {
    return html`
        <header></header>
        <section></section>
    `;
}

class Form {
    constructor() {
        this.user = userApi.getAll();
    }
    render() {
        const dom = makeTemplate();
        const gameSection = dom.querySelector('section');
       
        if(this.user.story === 'game-a') {
            const game = new Game1();
            gameSection.appendChild(game.render());
            console.log('story 1 picked');

        }

        else if(this.user.story === 'game-b') {
            const game = new Game2();
            gameSection.appendChild(game.render());
            console.log('story 2 picked');

        }
        
        // else if(this.user.story === 'game-c') {
        //     const game = new Game3();
        //     gameSection.appendChild(game.render());
        // }
        return dom;
    }
}

const form = new Form();
const root = document.getElementById('root');
root.appendChild(form.render());

