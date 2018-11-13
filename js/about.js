import html from './html.js';

function makeTemplate() {
    return html`
        <header></header>

        <h2>Kristin Hortsch</h2>
        <img src="images/kristin.jpeg" alt="photo-of-kristin"/>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
        
        <h2>Ivan Poblete</h2>
        <img src="images/Ivan.jpeg" alt="photo-of-Ivan"/>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
        
        <h2>Jei Shepherd</h2>
        <img src="images/Jei.jpeg" alt="photo-of-Jei"/>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
        
        <h2>Connor Frendt</h2>
        <img src="images/Connor.jpeg" alt="photo-of-Connor"/>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
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