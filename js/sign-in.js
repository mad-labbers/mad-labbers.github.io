import html from './html.js';
import userApi from '../data/user-api.js';


function makeTemplate() {
    return html `
    <h1>Sign In</h1>
    <form id="user-form">
        <label for="name">Name:</label>
            <input type="text" id="name" name="name">
            <input type="radio" id="game-a" name="story" value="game-a" required />Game A
            <input type="radio" id="game-b" name="story" value="game-b" required />Game B
            <input type="radio" id="game-c" name="story" value="game-c" required />Game C
             <br />
             <br />
             
             <button id="play-button">Play!</button>
    </form>
    `;
}

export default class GameInfo {
    constructor() {
        this.user = userApi.getAll();
    }

    render() {
        let dom = makeTemplate();
        const form = dom.getElementById('user-form');
        form.addEventListener('submit', function(event) {
            event.preventDefault();
            const elements = form.elements;
            const user = {};

            user.name = elements.name.value;
            user.story = elements.story.value;
            userApi.add(user);
            console.log('user', user);
            // window.location.href = '../game.html';
        });
        
        return dom;
    }
}

const gameInfo = new GameInfo();
const root = document.getElementById('root');
root.appendChild(gameInfo.render());