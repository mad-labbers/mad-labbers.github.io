import html from './html.js';

function makeTemplate() {
    return html `
    <h1>Sign In</h1>
    <form id="user-form">
        <label for="name">Name:</label>
            <input type="text" id="name" name="name">
            <input type="radio" id="game-a" name="choose-game" value="game-a">Game A
            <input type="radio" id="game-b" name="choose-game" value="game-b">Game B
            <input type="radio" id="game-c" name="choose-game" value="game-c">Game C
            <button id="play-button">Play!</button>
    </form>
    `;
}

export default class GameInfo {
    render() {
        let dom = makeTemplate();
        return dom;
    }
}

