import html from './html.js';

function makeTemplate() {
    return html`
        <nav>
            <a href="./">Home</a>
            <a href="./instructions.html">Instructions</a>
            <a href="./stories.html">Stories</a>
            <a href="./labbers.html">About Us</a>
        </nav>
    `;
}

export default class Header {
    render() {
        const dom = makeTemplate();
        return dom;
    }
}