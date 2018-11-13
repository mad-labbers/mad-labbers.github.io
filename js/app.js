import html from './html.js';
import Header from './header.js';
import GameInfo from './sign-in.js';


function makeTemplate() {
    return html`
        <header></header>
        <main>
            <p>This is our game!</p>
        </main>
    `;
}

class App {
    render() {
        const dom = makeTemplate();
        const headerSection = dom.querySelector('header');
        const header = new Header();
        headerSection.appendChild(header.render());
        
        
        return dom;
    }
}

const app = new App();
const root = document.getElementById('root');
const gameInfo = new GameInfo();
root.appendChild(app.render());
root.appendChild(gameInfo.render());
