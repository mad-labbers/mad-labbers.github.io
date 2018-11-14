import html from './html.js';

let template = function(userResponse) {
    return html` 
        <div class="piranha">
            <h1>How to Cross a Piranha-Infested River</h1>
                
                <p>If you are traveling in <span class="piranha">${userResponse.foreignCountry}</span> and find yourself having to cross a piranha-filled river, here's how to do it <span class="piranha">${userResponse.adverb1}</span>: 
                <li>Piranhas are more <span class="piranha">${userResponse.adjective1}</span> during the day, so cross the river at night.</li>
                <li>Avoid areas with netted <span class="piranha">${userResponse.animal}</span> traps--piranhas may be <span class="piranha">${userResponse.verbIng1}</span> there looking to<span class="piranha"> ${userResponse.verb1}</span> them!</li>
                <li>When <span class="piranha">${userResponse.verbIng2}</span> the river, swim <span class="piranha">${userResponse.adverb2}</span>. You don't want to wake them up and make them <span class="piranha">${userResponse.adjective2}</span>!</li>
                <li>Whatever you do, if you have an open wound, try to find another way to get back to the <span class="piranha">${userResponse.aPlace}</span>. Piranhas are attracted to fresh <span class="piranha">${userResponse.typeOfLiquid}</span> and will most likely take a bite out of your<span class="piranha"> ${userResponse.bodyPart}</span> if you <span class="piranha">${userResponse.verb2}</span> in the water!</li>

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

