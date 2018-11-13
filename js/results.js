import html from './html.js';
import inputApi from '../data/input-api.js';
import userApi from '../data/user-api.js';
import Story1 from './story1.js';
import Story2 from './story2.js';
// import Story3 from './story3.js';

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
        this.user = userApi.getAll();
    }

    render() {
        const dom = makeTemplate();
        const storySection = dom.querySelector('.story-result');
        
        if(this.user.story === 'game-a') {
            const story1 = new Story1(this.userResponse);
            storySection.appendChild(story1.render());
        }
        else if(this.user.story === 'game-b') {
            const story2 = new Story2(this.userResponse);
            storySection.appendChild(story2.render());
            console.log('story 2 picked');
        }
        // else if(this.user.story === 'game-c') {
        //     const story3 = new Story3(this.userResponse);
        //     storySection.appendChild(story3.render());
        // }

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
