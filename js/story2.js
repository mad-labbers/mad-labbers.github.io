import html from './html.js';

let template = function(userResponse) {
    return html` 
        <div class="wedding">
            <h1>Wedding Advice for the Happy Couple</h1>
            <p>
                My name is <span class="wedding">${userResponse.name}</span> and I've known Jayselle and Ivan for <span class="wedding">${userResponse.number}</span> years.  I <span class="wedding">${userResponse.verb}</span> all the way from <span class="wedding">${userResponse.place}</span> to celebrate this day!  I am so <span class="wedding">${userResponse.adjective}</span>, that Jayselle and Ivan are tying the knot.  They have to be the most <span class="wedding">${userResponse.adjective2}</span> <span class="wedding">${userResponse.noun3}</span> and I wish them <span class="wedding">${userResponse.adjective3}</span> <span class="wedding">${userResponse.noun4}</span> for years to come.  My best advice?  Don't forget to<span class="wedding"> ${userResponse.verb2}</span> before you  <span class="wedding">${userResponse.verb3}</span> and <span class="wedding">${userResponse.verb4}</span> after the <span class="wedding">${userResponse.noun5}</span>.  Ivan, you should always <span class="wedding">${userResponse.verb5}</span> Jayselle's <span class="wedding">${userResponse.noun6}</span>, and Jayselle you should always<span class="wedding"> ${userResponse.verb6}</span> Ivan's <span class="wedding">${userResponse.noun7}</span>.  I wish you both a lifetime of happiness and <span class="wedding">${userResponse.noun8}</span>!  XOXO <span class="wedding">${userResponse.name}</span>
            </p>
        </div>
        `;
};

export default class Story2 {
    constructor(userResponse) {
        this.userResponse = userResponse;
    }
    render() {
        let dom = template(this.userResponse);
        return dom;
    }
}

