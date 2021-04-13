import { html, render } from '../node_modules/lit-html/lit-html.js';



const listTemplate = (data) => html `
<ul>
    ${data.map(t=> html`<li>${t}</li>`)}
</ul>
`;

document.getElementById('btnLoadTowns').addEventListener('click', (e) => {
    e.preventDefault();

    const townsInput = document.getElementById('towns').value;
    const root = document.getElementById('root');

    const towns = townsInput.split(', ').map(t => t.trim());

    const result = listTemplate(towns);

    render(result,root);
    document.getElementById('towns').value = '';
})