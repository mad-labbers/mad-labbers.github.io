import html from './html.js';

let template = function(userResponse) {
    return html` 
        <div class="star-wars">
            <h1>The Force</h1> 
                <p>The Force is a mystical, <span class="stars">${userResponse.adjective}</span> power. As Jedi Master
                 Obi-Wan Kenobi once said, "The Force is an energy field, created
                 by all living <span class="stars">${userResponse.pluralnoun}</span> , that surrounds us, penetrates us,
                 and binds the <span class="stars">${userResponse.noun}</span> together.' Using the power of the force, 
                 a Jedi can do many <span class="stars">${userResponse.adjective2}</span> things, like
                 using the Force to exercise <span class="stars">${userResponse.bodypart}</span> control over
                 <span class="stars">${userResponse.adjective3}</span>-minded <span class="stars">${userResponse.pluralnoun2}</span>. A Jedi can also
                 use the Force to move objects with his or her <span class="stars">${userResponse.bodypart2}</span>. 
                 It doesn't matter how <span class="stars">${userResponse.adjective4}</span> these objects are; it
                 only matters how <span class="stars">${userResponse.adverb}</span> the Jedi believes in the Force.
                 Most importantly, the Force teaches a Jedi t reply on his or her feelings.
                 As Obi-Wan Kenobi told his student Luke, <span class="stars">${userResponse.noun2}</span>-walker: "Your
                 <span class="stars">${userResponse.bodypart3}</span> can deceive you. Don't trust them. "Instead
                 a Jedi should <span class="stars">${userResponse.adverb2}</span> trust in the Force.
                 </p>
        </div>
        `;
};

export default class Story4 {
    constructor(userResponse) {
        this.userResponse = userResponse;
    }
    render() {
        let dom = template(this.userResponse);
        return dom;
    }
}
