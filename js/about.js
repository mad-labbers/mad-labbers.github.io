import html from './html.js';

function makeTemplate() {
    return html`
        
        <h2>Kristin Hortsch</h2>
        <img src="images/kristin.jpeg" alt="photo-of-kristin"/>
        
        <h2>Ivan Poblete</h2>
        <img src="images/Ivan.jpeg" alt="photo-of-Ivan"/>
        
        <h2>Jei Shepherd</h2>
        <img src="images/Jei.jpeg" alt="photo-of-Jei"/>
        
        <h2>Connor Frendt</h2>
        <img src="images/Connor.jpeg" alt="photo-of-Connor"/>
        
        <p>We are "Mad Labbers", a team of budding Developers attending Alchemy Code Lab in
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