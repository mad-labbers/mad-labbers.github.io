import html from './html.js';
// import Story1 from './'

function makeTemplate(story) {
    return html`
        <li>
            <p>${story.choice}</p>
        </li>
    `;
}

// const stories = storiesApi.getAll();        

export default class Blurb {
    constructor(story, onSelect) {
        this.story = story;
        this.onSelect = onSelect;
    }
    render() {
        let dom = makeTemplate(this.story);

        const li = dom.querySelector('li');
        li.addEventListener('click', () => {
            this.onSelect(this.story);

        });
        // if(this.story.choice === 'piranha') {
        //     const story1 = new Story1(this.story.responses);
        //     li.appendChild(story1.render());
        //     ul.addEventListener('click', function() {
        //         if(li.style.display === 'none') {
        //             li.style.display = 'block';
        //         }
        //         else {
        //             li.style.display = 'none';
        //         }
        //     });

        // }
        return dom;
    }
}