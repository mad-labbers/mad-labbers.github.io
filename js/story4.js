import html from './html.js';

let template = function(userResponse) {
    return html` 
        <div class="star-wars">
            <h1>The Force</h1> 
            <p>
                The Force is a mystical, ${userResponse.adjective} power. As Jedi Master
                Obi-Wan Kenobi once said, "The Force is an energy field, created
                by all living ${userResponse.pluralnoun} , that surrounds us, penetrates us,
                and binds the ${userResponse.noun} together.' Using the power of the force, 
                a Jedi can do many ${userResponse.adjective2} things, like
                using the Force to exercise ${userResponse.bodypart} control over
                ${userResponse.adjective3}-minded ${userResponse.pluralnoun2}. A Jedi can also
                use the Force to move objects with his or her ${userResponse.bodypart2}. 
                It doesn't matter how ${userResponse.adjective4} these objects are; it
                only matters how ${userResponse.adverb} the Jedi believes in the Force.
                Most importantly, the Force teaches a Jedi t reply on his or her feelings.
                As Obi-Wan Kenobi told his student Luke, ${userResponse.noun2}-walker: "Your
                ${userResponse.bodypart3} can deceive you. Don't trust them. "Instead
                a Jedi should ${userResponse.adverb2} trust in the Force.
            </p>
            <audio autoplay></audio>
        </div>
        `;
};

export default class Story4 {
    constructor(userResponse) {
        this.userResponse = userResponse;
    }
    render() {
        let dom = template(this.userResponse);
        let sound = dom.querySelector('audio');
        sound.src = '../sounds/Starwars.mp3';
        dom.appendChild(sound);
        return dom;
    }
}
