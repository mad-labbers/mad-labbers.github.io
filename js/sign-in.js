import html from './html.js';

function makeTemplate() {
    return html `
    <h1>Sign In</h1>
    <form id="user-form">
        <label for="name">Name:</label>
            <input type="text" id="name" name="name">
            <input type="radio" id="game-a" name="choose-game" value="game-a" required />Game A
            <input type="radio" id="game-b" name="choose-game" value="game-b" required />Game B
            <input type="radio" id="game-c" name="choose-game" value="game-c" required />Game C
             <br />
             <br />
             
             <button id="play-button">Play!</button>
    </form>
    `;
}

export default class GameInfo {
    render() {
        let dom = makeTemplate();
        const form = dom.getElementById('user-form');
        form.addEventListener('submit', function(event) {
            event.preventDefault();
            console.log('clicked!');
            window.location.href = '../input.html';
        });
        console.log(form);
        return dom;
    }
}

const gameInfo = new GameInfo();
const root = document.getElementById('root');
root.appendChild(gameInfo.render());