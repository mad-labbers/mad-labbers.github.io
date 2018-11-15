import html from './html.js';
import inputApi from '../data/input-api.js';
import storiesApi from '../data/stories-api.js';
import userApi from '../data/user-api.js';
import Story1 from './story1.js';
import Story2 from './story2.js';
import Story3 from './story3.js';
import Story4 from './story4.js';
import Story6 from './story6.js';

function makeTemplate() {
    return html`
        <body>
            <img>
            <section class="story-result">
            
            </section>
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
        const image = dom.querySelector('img');
        const story = {
            choice: this.user.story,
            responses: this.userResponse
        };
        storiesApi.getAll();
        storiesApi.add(story);
        
        if(this.user.story === 'piranha') {
            const story1 = new Story1(this.userResponse);
            storySection.appendChild(story1.render());
            image.src = 'https://us.123rf.com/450wm/rubynurbaidi/rubynurbaidi1601/rubynurbaidi160100021/50658653-illustration-of-cute-cartoon-piranha-.jpg?ver=6';
        } else if(this.user.story === 'wedding') {
            const story2 = new Story2(this.userResponse);
            storySection.appendChild(story2.render());
            image.src = 'http://www.zimbojam.com/wp-content/uploads/2018/01/wedding-02.jpg';
        } else if(this.user.story === 'dragon') {
            const story3 = new Story3(this.userResponse);
            storySection.appendChild(story3.render());
            image.src = 'http://s3-ap-southeast-2.amazonaws.com/lmhstore/wp-content/uploads/2018/04/15114026/Screen-Shot-2018-04-15-at-11.24.34-AM.png';
        } else if(this.user.story === 'star-wars') {
            const story4 = new Story4(this.userResponse);
            storySection.appendChild(story4.render());
            image.src = 'https://upload.wikimedia.org/wikipedia/commons/thumb/6/6c/Star_Wars_Logo.svg/1280px-Star_Wars_Logo.svg.png';
        } else if(this.user.story === 'bed-story') {
            const story6 = new Story6(this.userResponse);
            storySection.appendChild(story6.render());
            image.src = '../images/bedtimestory.png';
        }

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
