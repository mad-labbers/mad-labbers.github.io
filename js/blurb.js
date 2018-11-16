import html from './html.js';

function makeTemplate(story) {
    return html`
        <li>
            <p>${story.choice}</p>
        </li>
    `;
}      

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
        return dom;
    }
}