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
        <img class="background-pic" src="http://smartvectorpics.com/wp-content/uploads/2015/02/White-Speech-Bubbles-With-Colorful-Backgrounds-And-Shadows-In-Flat-Designs.png">
        <img class="background-pic2" src="http://smartvectorpics.com/wp-content/uploads/2015/02/White-Speech-Bubbles-With-Colorful-Backgrounds-And-Shadows-In-Flat-Designs.png">
        <div class="story-list">
            <ul id="stories"></ul>
            <section id="story-detail">
                <h1 class="selected-story">Selected Story</h1>
            </section>
        </div>
    `;
}

// #2a You can also create an object dictionary that maps the key to the component:
const components = {
    piranha: Story1,
    wedding: Story2,
    dragon:  Story3,
    'star-wars':  Story4,
    news: Story5,
    'bed-story': Story6
};

export default class SavedStories {
    constructor() {
        this.stories = storiesApi.getAll();
    }
    render() {
        const dom = makeTemplate();
        const stories = storiesApi.getAll();
        const ul = dom.querySelector('ul');
        const section = dom.querySelector('section');
        for(let i = 0; i < stories.length; i++) {
            const story = stories[i];
            const blurb = new Blurb(story, () => {
                while(section.lastElementChild) {
                    section.lastElementChild.remove();
                }
                
                // #1 limit conditionality to the thing that varies: 
                // let Story = null;
                // if(story.choice === 'piranha') {
                //     Story = Story1;
                // }

                // else if(story.choice === 'wedding') {
                //     Story = Story2;
                // }

                // else if(story.choice === 'dragon') {
                //     Story = Story3;
                // }

                // else if(story.choice === 'star-wars') {
                //     Story = Story4;
                // }

                // else if(story.choice === 'news') {
                //     Story = Story5;
                // }

                // else if(story.choice === 'bed-story') {
                //     Story = Story6;
                // }

                // #2b dictionary makes lookup easy:
                const Story = components[story.choice];
                const story = new Story(story.responses);
                section.appendChild(story.render());
            });
            ul.appendChild(blurb.render());
        }
        return dom;
    }
}

const savedStories = new SavedStories();
const root = document.getElementById('root');
root.appendChild(savedStories.render());
const audio = document.querySelectorAll('audio');
audio.forEach(a => {
    a.muted = true;
});