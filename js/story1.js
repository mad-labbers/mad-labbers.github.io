import html from './html.js';

function makeTemplate() {
    return html` 
        <p>If you are traveling in ${userReponse.foreignCountry} and find yourself having to cross a pirahna-filled river, here's how to do it ${userResponse.adverb}: 
        <li>Pirahnas are more ${userResponse.adjective} during the day, so cross the river at night.</li>
        <li>Avoid areas with netted ${}

    `;
};

