import html from './html.js';

let template = function(userResponse) {
    return html` 
        <div class="dragon">
            <h1>Caution: Dragon</h1> 
                <p>The <span class="dragon">${userResponse.color}</span> Dragon is the <span class="dragon">${userResponse.superlative}</span> Dragon of all. It has <span class="dragon">${userResponse.adjective1}</span> <span class="dragon">${userResponse['body-part-plural']}</span>, and a <span class="dragon">${userResponse['body-part']}</span> shaped like a <span class="dragon">${userResponse.noun1}</span>. It loves to eat <span class="dragon">${userResponse['animal-plural']}</span>, although it will feast on nearly anything. It is <span class="dragon">${userResponse.adjective2}</span> and <span class="dragon">${userResponse.adjective3}</span>. You must be <span class="dragon">${userResponse.adjective4}</span> around it, or you may end up as its meal!</p>
        </div>
        `;
};

export default class Story1 {
    constructor(userResponse) {
        this.userResponse = userResponse;
    }
    render() {
        let dom = template(this.userResponse);
        return dom;
    }
}
