import { cats } from './catSeeder.js';
import { html, render } from '../node_modules/lit-html/lit-html.js';
import { styleMap as StyleMap } from '../node_modules/lit-html/directives/style-map.js';

const container = document.getElementById('allCats');

cats.forEach(c => {
    c.isVisible = false;
})

const listItemTemplate = (cat) => html `
<li>
    <img src="./images/${cat.imageLocation}.jpg" width="250" height="250" alt="Card image cap">
    <div class="info">
        <button class="showBtn">${cat.isVisible ? 'Hide' : 'Show'}</button>
        <div class="status" style=${StyleMap({display: cat.isVisible ? 'block':'none'})} id=${cat.id}>
            <h4>Status Code: ${cat.statusCode}</h4>
            <p>${cat.statusMessage}</p>
        </div>
    </div>
</li>
`
update();

function update() {
    const unorderedList = html `
    <ul @click=${showInfo}>
    ${cats.map(listItemTemplate)};
        </ul>`;

    render(unorderedList, container);
}

function showInfo(e) {
    const divToShow = e.target.nextElementSibling;
    ``
    if (divToShow != null && divToShow.classList.contains('status')) {
        const cat = cats.find(c => c.id == divToShow.id);
        cat.isVisible = !cat.isVisible;
        update();
    }
}