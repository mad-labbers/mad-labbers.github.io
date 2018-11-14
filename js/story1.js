import html from './html.js';

let template = function(userResponse) {
    return html` 
        <div class="piranha">
            <h1>How to Cross a Piranha-Infested River</h1>
                <p>If you are traveling in ${userResponse.foreignCountry} and find yourself having to cross a piranha-filled river, here's how to do it ${userResponse.adverb1}:</p> 
                <li><span class="li-content">Piranhas are more ${userResponse.adjective1} during the day, so cross the river at night.</span</li>
                <li>Avoid areas with netted ${userResponse.animal} traps--piranhas may be ${userResponse.verbIng1} there looking to ${userResponse.verb1} them!</li>
                <li>When ${userResponse.verbIng2} the river, swim ${userResponse.adverb2}. You don't want to wake them up and make them ${userResponse.adjective2}!</li>
                <li>Whatever you do, if you have an open wound, try to find another way to get back to the ${userResponse.aPlace}. Piranhas are attracted to fresh ${userResponse.typeOfLiquid} and will most likely take a bite out of your ${userResponse.bodyPart} if you ${userResponse.verb2} in the water!</li>
        </div>
        `;
};

export default class Story1 {
    constructor(userResponse) {
        this.userResponse = userResponse;
    }
    render() {
        let dom = template(this.userResponse);
        return dom;
    }
}

