import Game1 from './input1.js';
import Game2 from './input2.js';
import Game3 from './input3.js';
import Game4 from './input4.js';
import Game5 from './input5.js';
import Game6 from './input6.js';
import html from './html.js';
import userApi from '../data/user-api.js';

function makeTemplate() {
    return html`
        <section>
            <img class="background-pic" src="http://smartvectorpics.com/wp-content/uploads/2015/02/White-Speech-Bubbles-With-Colorful-Backgrounds-And-Shadows-In-Flat-Designs.png">
            <img class="background-pic2" src="http://smartvectorpics.com/wp-content/uploads/2015/02/White-Speech-Bubbles-With-Colorful-Backgrounds-And-Shadows-In-Flat-Designs.png">
            <div class="input-form">
        </section>
    `;
}   

// make sure file and component name are in agreement
class Game {
    constructor() {
        this.user = userApi.getAll();
    }
    render() {
        const dom = makeTemplate();
        const gameSection = dom.querySelector('.input-form');
       
        // see example in stories.js for ways to make this leaner 
        if(this.user.story === 'piranha') {
            const game = new Game1();
            gameSection.appendChild(game.render());
        } 
        else if(this.user.story === 'wedding') {
            const game = new Game2();
            gameSection.appendChild(game.render());
        } 
        else if(this.user.story === 'dragon') {
            const game = new Game3();
            gameSection.appendChild(game.render());
        } 
        else if(this.user.story === 'star-wars') {
            const game = new Game4();
            gameSection.appendChild(game.render());
        } 
        else if(this.user.story === 'news') {
            const game = new Game5();
            gameSection.appendChild(game.render());
        } 
        else if(this.user.story === 'bed-story') {
            const game = new Game6();
            gameSection.appendChild(game.render());
        } 
        return dom;
    }
}

const game = new Game();
const root = document.getElementById('root');
root.appendChild(game.render());