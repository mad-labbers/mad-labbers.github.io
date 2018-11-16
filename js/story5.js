import html from './html.js';

let template = function(userResponse) {
    return html` 
        <div class="news">
            <h1>News of the Weird</h1> 
                <p>
                    A <span class="news">${userResponse.noun}</span> in <span class="news">${userResponse.wackystate}</span> was arrested this morning
                    after he <span class="news">${userResponse.verb}</span> in front of a <span class="news">${userResponse.noun2}</span> . <span class="news">${userResponse.propername}</span>
                    had a history of <span class="news">${userResponse.verb2}</span>, but no one-not even his <span class="news">${userResponse.noun3}</span>
                    -ever imagined he'd <span class="news">${userResponse.verb3}</span> with a <span class="news">${userResponse.noun4}</span> stuck in his
                    <span class="news">${userResponse.bodypart}</span>.<br />
                    Today in <span class="news">${userResponse.city}</span>, after a brief <span class="news">${userResponse.activity}</span>, cops followed an armed 
                    man into a <span class="news">${userResponse.chainrestaurant}</span>. There he reportedly <span class="news">${userResponse.verbpasttense}</span>
                    in the fry machine. <br /><br />
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
        sound.src = '../sounds/PoliceSiren.m4a';
        dom.appendChild(sound);
        return dom;
    }
}