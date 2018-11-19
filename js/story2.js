import html from './html.js';

// #1 Break up lines to < ~80 chars.
// #2 Use parent class to avoid having to 
// decorate all of the spans with classes:
// .wedding span { ... }

let template = function(userResponse) {
    return html` 
        <div class="wedding">
            <h1>Wedding Advice for the Happy Couple</h1>
            <p>
                My name is <span>${userResponse.name}</span> and 
                I've known Jayselle and Ivan for <span>${userResponse.number}</span> 
                years.  I <span>${userResponse.verb}</span> 
                all the way from <span>${userResponse.place}</span> 
                to celebrate this day!  I am so <span>${userResponse.adjective}</span>, 
                that Jayselle and Ivan are tying the knot.  They have to be the most 
                <span>${userResponse.adjective2}</span> 
                <span>${userResponse.noun3}</span> 
                and I wish them <span>${userResponse.adjective3}</span> 
                <span>${userResponse.noun4}</span> for years to come.  
                My best advice?  Don't forget to<span> ${userResponse.verb2}</span>
                before you  <span>${userResponse.verb3}</span> and 
                <span>${userResponse.verb4}</span> after the 
                <span>${userResponse.noun5}</span>.  
                Ivan, you should always <span>${userResponse.verb5}</span>
                Jayselle's <span>${userResponse.noun6}</span>, 
                and Jayselle you should always<span> ${userResponse.verb6}</span>
                Ivan's <span>${userResponse.noun7}</span>.  
                I wish you both a lifetime of happiness and <span>${userResponse.noun8}</span>!  
                XOXO <span>${userResponse.name}</span>
            </p>
            <audio autoplay></audio>
        </div>
    `;
};

export default class Story2 {
    constructor(userResponse) {
        this.userResponse = userResponse;
    }
    render() {
        let dom = template(this.userResponse);
        let sound = dom.querySelector('audio');
        sound.src = '../sounds/wedding.mp3';
        dom.appendChild(sound);
        return dom;
    }
}