import html from './html.js';

function makeTemplate() {
    return html`
        <nav>
            <a href="./index.html">Home</a>
            <a href="./instructions.html">Instructions</a>
            <a href="./labbers.html">About Us</a>
        </nav>
    `;
}

export default class Header {
    render() {
        return makeTemplate();
    }
}