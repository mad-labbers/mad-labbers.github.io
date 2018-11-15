import html from './html.js';

let template = function(userResponse) {
    return html` 
        <div class="news">
            <h1>News of the Weird</h1> 
                <p>
                    A <span class="news">${userResponse.noun}</span> in <span class="news">${userResponse.wackystate}</span> was arrested this morning
                    after he <span class="news">${userResponse.verb}</span> in front of <span class="news">${userResponse.noun2} . <span class="news">${userResponse.propername}</span>
                    had a history of <span class="news">${userResponse.verb2}</span>, but no one-not even his <span class="news">${userResponse.noun3}</span>
                    -ever imagined he'd <span class="news">${userResponse.verb3}</span> with a <span class="news">${userResponse.noun4}</span> stuck in his
                    <span class="news">${userResponse.bodypart}</span>.<br />
                    Today in <span class="news">${userResponse.city}</span>, after a brief <span class="news">${userResponse.activity}</span>, cops followed an armed 
                    man into a <span class="news">${userResponse.chainrestaurant}</span>. There he reportedly <span class="news">${userResponse.verbpasttense}</span>
                    in the fry machine. <br />
                    In <span class="news">${userResponse.month}</span>, a woman was charged with a strange crime. She <span class="news">${userResponse.verb4}</span> 
                    with a <span class="news">${userResponse.noun4}</span>, she was <span class="news">${userResponse.verbpasttense2}</span> with a
                    <span class="news">${userResponse.adjective}</span> dog. <br />
                    And finally today in Portland a team of <span class="news">${userResponse.typeofworkers} were found trapped in 
                    a <span class="news">${userResponse.noun5}</span>. Apparently they been <span class="news">${userResponse.verbpasttense3}</span> when they discovered their
                    boss was really <span class="news">${userResponse.famousperson}</span>. The team hid in a <span class="news">${userResponse.noun6}</span> but soon 
                    realized they were stuck and had to wait for <span class="news">${userResponse.personintheroom}</span> to save them.
                </p>

                <audio autoplay></audio>
        </div>
        `;
};

export default class Story5 {
    constructor(userResponse) {
        this.userResponse = userResponse;
    }
    render() {
        let dom = template(this.userResponse);
        let sound = dom.querySelector('audio');
        sound.src = '../sounds/.mp3';
        dom.appendChild(sound);
        return dom;
    }
}
