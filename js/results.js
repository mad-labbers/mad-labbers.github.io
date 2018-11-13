import html from './html.js';
import inputApi from '../data/input-api.js';
import Story1 from './story1.js';

function makeTemplate() {
    return html`
        <header></header>
        <body>
            <section class="story-result"></section>
        </body>
    `;
}

export default class Results {
    constructor() {
        this.userResponse = inputApi.getAll();
    }

    render() {
        const dom = makeTemplate();
        const resultSection = dom.querySelector('section');

        const story1 = new Story1(this.userResponse);
        resultSection.appendChild(story1.render());
    }
}

const results = new Results();
document.getElementById('root').appendChild(results.render());
