import html from './html.js';

function makeTemplate(story) {
    return html`
        <li>
            <p>${story.choice}</p>
        </li>
    `;
}

// const stories = storiesApi.getAll();        

export default class Blurb {
    constructor(story) {
        this.story = story;
    }
    render() {
        let dom = makeTemplate(this.story);
        return dom;
    }

}