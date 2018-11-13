import html from './html.js';

let template = function(userResponse) {
    return html` 
        <h1>Wedding Advice for the Happy Couple</p>
        <p>
            My name is ${userResponse.name} and I've known Jayselle and Ivan for ${userResponse.number} years.  I ${userResponse.verb} all the way from ${userResponse.noun2} to celebrate this day!  I am so ${userResponse.adjective}, that Jayselle and Ivan are tying the knot.  They have to be the most ${userResponse.adjective2} ${userResponse.noun3} and I wish them ${userResponse.adjective3} ${userResponse.noun4} for years to come.  My best advice?  Don't forget to ${userResponse.verb2} before you  ${userResponse.verb3} and ${userResponse.verb4} after the ${userResponse.noun5}.  Ivan, you should always ${userResponse.verb5} Jayselle's ${userResponse.noun6}, and Jayselle you should always ${userResponse.verb6} Ivan's ${userResponse.noun7}.  I wish you both a lifetime of happiness and ${userResponse.noun8}!  XOXO ${userResponse.name}
        </p>
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

