import html from './html.js';

let template = function(userResponse) {
    return html` 
        <div class="bed-story">
            <h1>World's Worst Bedtime Story</h1> 
                <p>
                    Once upon a time, in a place called <span class="bed">${userResponse.place1}</span>, there was a <span class="bed">${userResponse.adjective1}</span> princess named <span class="bed">${userResponse.fname}</span>.  Her kingdom was huge, but her <span class="bed">${userResponse.bodyPart1}</span> was bigger.  She was beautiful from her <span class="bed">${userResponse.bodyPart2}</span> to her <span class="bed">${userResponse.organ}</span>.  One day, she saw a <span class="bed">${userResponse.adjective2}</span> prince named <span class="bed">${userResponse.mname}</span>.  He had a <span class="bed">${userResponse.adjective3}</span> face.  As soon as his <span class="bed"> ${userResponse.bodyPart3}</span> touched her <span class="bed">${userResponse.bodyPart4}</span> they fell in love.  They got married at <span class="bed">${userResponse.place2}</span> the following day.
                </p>
                <p>
                    Not long after, they had a baby.  They decided to call him/her <span class="bed">${userResponse.name1}</span>.  He/She looked like a(n) <span class="bed">${userResponse.animal1}</span>.  He/She used to <span class="bed">${userResponse.verb1}</span> <span class="bed">${userResponse.number1}</span> times a day so that his/her <span class="bed">${userResponse.bodyPart5}</span> would be <span class="bed">${userResponse.adjective4}</span> and <span class="bed">${userResponse.adjective5}</span>.  And they <span class="bed">${userResponse.verb2}</span> happily ever after!
                </p>
        <audio autoplay></audio>
        </div>
        `;
};

export default class Story3 {
    constructor(userResponse) {
        this.userResponse = userResponse;
    }
    render() {
        let dom = template(this.userResponse);
        let sound = dom.querySelector('audio');
        sound.src = '../sounds/bedtimestories.m4a';
        dom.appendChild(sound);
        return dom;
    }
}