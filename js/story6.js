import html from './html.js';

let template = function(userResponse) {
    return html` 
        <div class="bed-story">
            <h1>World's Worst Bedtime Story</h1> 
                <p>
                    Once upon a time, in a place called <span class="bed">${userResponse.place1}</span>, there was a <span class="bed">${userResponse.adjective1}</span> princess named <span class="bed">${userResponse.fname}</span>.  Her kingdom was huge, but her <span class="bed">${userResponse.bodyPart1}</span> was bigger.  She was beautiful from her <span class="bed">${userResponse.bodyPart2}</span> to her <span class="bed">${userResponse.organ}</span>.  One day, she saw a <span class="bed">${userResponse.adjective2}</span> prince named <span class="bed">${userResponse.mname}</span>.  He had a <span class="bed">${userResponse.adjective3}</span> face.  As soon as his <span class="bed"> ${userResponse.bodyPart3}</span> touched her <span class="bed">${userResponse.bodyPart4}</span> they fell in love.  They got married at <span class="bed">${userResponse.place2}</span> the following day and lived happily ever after.
                </p>
        <audio autoplay></audio>
        </div>
    `;
};

export default class Story6 {
    constructor(userResponse) {
        this.userResponse = userResponse;
    }
    render() {
        let dom = template(this.userResponse);
        let sound = dom.querySelector('audio');
        sound.src = '../sounds/bed.m4a';
        dom.appendChild(sound);
        return dom;
    }
}