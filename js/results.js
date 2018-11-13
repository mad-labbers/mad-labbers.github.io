import html from './html.js';
import inputApi from '../data/input-api.js';
import Story1 from './story1.js';

function makeTemplate() {
    return html`
        <header></header>
        <body>
            <section class="story-result"></section>
            <button>Play Again</button>
        </body>
    `;
}

export default class Results {
    constructor() {
        this.userResponse = inputApi.getAll();
    }

    render() {
        const dom = makeTemplate();
        const storySection = dom.querySelector('.story-result');

        const story1 = new Story1(this.userResponse);
        storySection.appendChild(story1.render());

        let button = dom.querySelector('button');
        button.addEventListener('click', function() {
            window.location = './index.html';
        });

        return dom;
    }
}

const results = new Results();
const resultSection = document.getElementById('root');
resultSection.appendChild(results.render());
