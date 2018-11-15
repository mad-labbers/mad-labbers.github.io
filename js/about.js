import html from './html.js';

function makeTemplate() {
    return html`
        <img src="../images/Portland_Oregon.jpg" class="oregonpic">
        <h1>Meet the Mad Labbers</h1>
        <section class="photos">
            <div id="kristin">
                <p class="names">Kristin Hortsch</p>
                <img src="images/kristin.jpeg" alt="photo-of-kristin" class="pic"/>
            </div>
            
            <div id="ivan">
                <p class="names">Ivan Poblete</p>
                <img src="images/Ivan.jpeg" alt="photo-of-Ivan" class="pic"/>
            </div>

            <div id="jei">
                <p class="names">Jei Shepherd</p>
                <img src="images/Jei.jpeg" alt="photo-of-Jei" class="pic"/>
            </div>

            <div id="connor">
                <p class="names">Connor Frendt</p>
                <img src="images/Connor.jpeg" alt="photo-of-Connor" class="pic"/>
            </div>
        </section>
        
        <p class="blurb">We are <span class="labbers">"Mad Labbers"</span>, a team of budding developers attending <span class="labbers">Alchemy Code Lab</span> in
        Portland, Oregon. We are in our <span class="labbers">final</span> week of Boot Camp I. Our team has created this
        fun Mad Libs App <span class="labbers">together</span> and we hope that you <span class="labbers">enjoy</span> it! </p>
    `;
}

export default class Profiles {
    render() {
        const dom = makeTemplate();
        return dom;
    }
}

const profiles = new Profiles();
const root = document.getElementById('root');
root.appendChild(profiles.render());