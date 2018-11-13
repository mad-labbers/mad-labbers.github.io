import html from './html.js';

let template = function(userResponse) {
    return html` 
        <p>
            My name is ${} and I've known Jayselle and Ivan for ${} years.  I ${} all the way from ${} to celebrate this day!  I am so ${}, that Jayselle and Ivan are tying the knot.  They have to be the most ${} ${} and I wish them ${} ${} for years to come.  My best advice?  Don't forget to ${} before you  ${} and ${} after the ${}.  Ivan, you should always ${} Jayselle's ${}, and Jayselle you should always ${} Ivan's ${}.  I wish you both a lifetime of happiness and ${}!  XOXO ${}
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

