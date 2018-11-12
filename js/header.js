import html from './html.js';

function makeTemplate() {
    return html`
        <div class="header">
            <h1>MAD LIBS</h1>
        </div>

        <nav>
            <a href="./labbers.html">About Us</a>
        </nav>
    `;
}

export default class Header {
    render() {
        return makeTemplate();
    }
}