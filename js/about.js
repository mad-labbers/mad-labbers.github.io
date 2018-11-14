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
        
        <p class="blurb">We are "Mad Labbers", a team of budding Developers attending Alchemy Code Lab in
        Portland, Oregon. We are in our final week of Boot Camp I. Our team has created this
        fun Mad Libs App together and we hope that you enjoy it! </p>
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