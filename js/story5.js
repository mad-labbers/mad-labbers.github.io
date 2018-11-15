import html from './html.js';

let template = function(userResponse) {
    return html` 
        <div class="news">
            <h1>News of the Weird</h1> 
                <p>
                    A ${userResponse.noun} in ${userResponse.wackystate} was arrested this morning
                    after he ${userResponse.verb} in front of ${userResponse.noun2} . ${userResponse.propername}
                    had a history of ${userResponse.verb2}, but no one-not even his ${userResponse.noun3}
                    -ever imagined he'd ${userResponse.verb3} with a ${userResponse.noun4} stuck in his
                    ${userResponse.bodypart}.<br />
                    Today in ${userResponse.city}, after a brief ${userResponse.activity}, cops followed an armed 
                    man into a ${userResponse.chainrestaurant}. There he reportedly ${userResponse.verbpasttense}
                    in the fry machine. <br />
                    In ${userResponse.month}, a woman was charged with a strange crime. She ${userResponse.verb4} 
                    with a ${userResponse.noun4}, she was ${userResponse.verbpasttense2} with a
                    ${userResponse.adjective} dog. <br />
                    And finally today in Portland a team of ${userResponse.typeofworkers} were found trapped in 
                    a ${userResponse.noun5}. Apparently they been ${userResponse.verbpasttense3} when they discovered their
                    boss was really ${userResponse.famousperson}. The team hid in a ${userResponse.noun6} but soon 
                    realized they were stuck and had to wait for ${userResponse.personintheroom} to save them.
                </p>

                // <audio autoplay></audio>
        </div>
        `;
};

export default class Story5 {
    constructor(userResponse) {
        this.userResponse = userResponse;
    }
    render() {
        let dom = template(this.userResponse);
        // let sound = dom.querySelector('audio');
        // // sound.src = '../sounds/.mp3';
        // dom.appendChild(sound);
        return dom;
    }
}
