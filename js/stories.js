import html from './html.js';
import storiesApi from '../data/stories-api.js';
import Story1 from './story1.js';
import Story2 from './story2.js';
import Story3 from './story3.js';
import Story4 from './story4.js';
import Story5 from './story5.js';
import Story6 from './story6.js';
import Blurb from './blurb.js';

function makeTemplate() {
    return html`
        <div>
            <ul id="stories">
                
            </ul>
            <section id="story-detail"></section>
        </div>
    `;
}

export default class SavedStories {
    constructor() {
        this.stories = storiesApi.getAll();
    }
    render() {
        const dom = makeTemplate();
        this.stories = storiesApi.getAll();
        const savedStorySection = dom.querySelector('.saved-stories');
        
        for(let i = 0; i < this.stories.length; i++) {
            const story = this.stories[i];
            if(story.choice === 'piranha') {
                const story1 = new Story1(story.responses);
                savedStorySection.appendChild(story1.render());
            } else if(story.choice === 'wedding') {
                const story2 = new Story2(story.responses);
                savedStorySection.appendChild(story2.render());
            } else if(story.choice === 'dragon') {
                const story3 = new Story3(story.responses);
                savedStorySection.appendChild(story3.render());
            } else if(story.choice === 'star-wars') {
                const story4 = new Story4(story.responses);
                savedStorySection.appendChild(story4.render());
            } else if(story.choice === 'news') {
                const story5 = new Story5(story.responses).render();
                section.appendChild(story5);
            } else if(story.choice === 'bed-story') {
                const story6 = new Story6(story.responses);
                savedStorySection.appendChild(story6.render());
            }
        const stories = storiesApi.getAll();
        const ul = dom.querySelector('ul');
        const section = dom.querySelector('section');
        for(let i = 0; i < stories.length; i++) {
            const story = stories[i];
            const blurb = new Blurb(story, () => {
                while(section.lastElementChild) {
                    section.lastElementChild.remove();
                }
            });
            ul.appendChild(blurb.render());
        }
        return dom;
    }
       
}

const savedStories = new SavedStories();
const test = document.getElementById('root');
test.appendChild(savedStories.render());
const audio = document.querySelectorAll('audio');
audio.forEach(a => {
    a.muted = true;
});