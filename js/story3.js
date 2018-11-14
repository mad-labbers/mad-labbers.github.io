import html from './html.js';

let template = function(userResponse) {
    return html` 
        <div class="dragon">
            <h1>Caution: Dragon</h1> 
                <p>The ${userResponse.color} Dragon is the ${userResponse.superlative} Dragon of all. It has ${userResponse.adjective1} ${userResponse['body-part-plural']}, and a ${userResponse['body-part']} shaped like a ${userResponse.noun1}. It loves to eat ${userResponse['animal-plural']}, although it will feast on nearly anything. It is ${userResponse.adjective2} and ${userResponse.adjective3}. You must be ${userResponse.adjective4} around it, or you may end up as its meal!</p>
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
