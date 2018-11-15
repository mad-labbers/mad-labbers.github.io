import html from './html.js';
import storiesApi from '../data/stories-api.js';
import Story1 from './story1.js';
// import Story2 from './story2.js';
// import Story3 from './story3.js';
// import Story4 from './story4.js';

function makeTemplate() {
    return html`
        <body>
            <img>
            <section class="saved-stories">
                <ul>
                    <li></li>
                </ul>
            </section>
        </body>
    `;
}

export default class Blurb {
    constructor() {
        this.stories = storiesApi.getAll();
    }
    render() {
        const dom = makeTemplate();
        this.stories = storiesApi.getAll();        
        
        for(let i = 0; i < this.stories.length; i++) {
            const story = this.stories[i];
            if(story.choice === 'piranha') {
                const element = dom.querySelector('ul');
                element.appendChild('How to Cross a Piranha-Infested River');
                const list = dom.querySelector('li');
                list.addEventListener('click', function() {
                    const story1 = new Story1(story.responses);
                    list.appendChild(story1.render());
                });
            // }
            // else if(story.choice === 'wedding') {
            //     const story2 = new Story2(story.responses);
            //     list.appendChild(story2.render());
            // }
            // else if(story.choice === 'dragon') {
            //     const story3 = new Story3(story.responses);
            //     list.appendChild(story3.render());
            // }
            // else if(story.choice === 'star-wars') {
            //     const story4 = new Story4(story.responses);
            //     list.appendChild(story4.render());
            // }
        
           
            }
        }
        return dom;

    }
}