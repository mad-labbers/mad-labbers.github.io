import html from './html.js';
import userApi from '../data/user-api.js';


function makeTemplate() {
    return html `
    <h1>Sign In</h1>
    <form id="user-form">

        <div>
            <label for="name">Name:</label>
            <input type="text" id="name" name="name">
        </div>
        <div class="themes">
            <div id="theme-1">
                <input type="radio" id="piranha" name="story" value="piranha" required />
                <label for="piranha">How to Cross a Piranha-Infested River</label>
            </div>
            <div id="theme-2">
                <input type="radio" id="wedding" name="story" value="wedding" required />
                <label for="wedding">Wedding Advice for the Happy Couple</label>
            </div>
            <div id="theme-3">
                <input type="radio" id="dragon" name="story" value="dragon" required />
                <label for="dragon">Dragon</label>
            </div>
        </div>
        <div class="button">
            <button id="play-button">Play!</button>
        </div>
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
            window.location.href = '../game.html';
        });
        return dom;
    }
}

const gameInfo = new GameInfo();
const root = document.getElementById('root');
root.appendChild(gameInfo.render());